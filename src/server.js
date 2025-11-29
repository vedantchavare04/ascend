// server.js (ES modules)
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.API_URL || "http://localhost:5173";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in .env");
  process.exit(1);
}

// -------- middleware ----------
app.use(cors({
  origin: process.env.API_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// IMPORTANT: session middleware (required by passport)
app.use(session({
  secret: process.env.SESSION_SECRET || "change_this_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// -------- passport config ----------
// In-memory store for demo. Replace with DB lookups in production.
const users = new Map(); // key: id, value: profile

passport.serializeUser((user, done) => {
  // store minimal identifier in session
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.get(id) || null;
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.SERVER_ROOT || `http://localhost:${PORT}`}/auth/google/callback`,
  scope: ["profile", "email"],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // profile contains Google user info
    // In production: find or create user in your DB (Neon), then return the user record
    // For demo we'll upsert into the in-memory Map
    const id = profile.id;
    const user = {
      id,
      displayName: profile.displayName,
      name: profile.name,
      emails: profile.emails,
      photos: profile.photos,
      provider: profile.provider,
      // optionally store accessToken/refreshToken if required (securely!)
    };

    users.set(id, user);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

// -------- routes ----------

// Start Google OAuth flow
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// OAuth callback: Google will redirect here
app.get("/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    session: true,
  }),
  (req, res) => {
    // Successful authentication.
    // You can redirect to frontend route. The session cookie is set.
    const redirectTo = `${process.env.API_URL}`;
    res.redirect(redirectTo);
  }
);

app.get("/auth/google/failure", (req, res) => {
  res.status(401).json({ ok: false, error: "Google authentication failed" });
});

// Optional route to get current user (requires session cookie)
app.get("/api/me", (req, res) => {
  if (!req.user) return res.status(401).json({ ok: false, error: "Not authenticated" });
  res.json({ ok: true, user: req.user });
});

// Logout
app.post("/api/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // name of default session cookie
      res.json({ ok: true });
    });
  });
});

// Health
app.get("/api/health", (req, res) => res.json({ ok: true }));

// start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
  console.log(`Google callback URL: ${process.env.SERVER_ROOT || `http://localhost:${process.env.PORT}`}/auth/google/callback`);
});
