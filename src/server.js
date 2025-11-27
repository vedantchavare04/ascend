import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import Razorpay from "razorpay";
import crypto from "crypto";
import cors from "cors";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 👉 Create order API
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// 👉 Verify payment signature API
app.post("/api/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ ok: true });
  } else {
    res.status(400).json({ ok: false });
  }
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const rows=await sql`
      INSERT INTO users (username, password_hash)
      VALUES (${username }, ${hash})
    `;
    console.log(rows);
    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.error("REGISTER error:", err);

    if (err.code === "23505") {
      return res.status(400).json({ error: "Username already exists" });
    }

    res.status(500).json({ error: "Server error" });
  }
});


// ----------------- LOGIN -----------------
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body; 

  try {
    // Query using neon serverless
    const rows = await sql`
      SELECT id, username, hash_password
      FROM users
      WHERE username = ${username}
    `;

    if (rows.length === 0) {
      // USER DOES NOT EXIST
      return res
        .status(404)
        .json({ error: "USER_NOT_FOUND" });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({
      message: "Login successful",
      user: { id: user.id, username: user.username },
    });

  } catch (err) {
    console.error("LOGIN error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(4000, () => console.log("Server running at 4000"));