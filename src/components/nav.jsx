import React, { useState, useContext } from "react";
import image from "../components/ascend.png"; // Ensure path is correct
import "./web.css";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../config/loginContext.js";
import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_URL;

export default function NavBart() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { login, user, loading } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = `${API_ROOT}/auth/google`;
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_ROOT}/api/logout`,
        {},
        { withCredentials: true }
      );
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const userName =
    user?.displayName ||
    user?.name?.givenName ||
    user?.name?.familyName ||
    "User";

  return (
    <div className="app-root">
      {/* Content wrapper */}
      <div className={`content ${showLogin ? "blurred" : ""}`}>
        <nav className="nav">
          <div className="nav-inner container">
            {/* BRAND LOGO */}
            <div className="brand" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
              <img src={image} alt="brand" width="150" />
            </div>

            {/* DESKTOP LINKS (Hidden on Mobile) */}
            <div className="nav-links desktop-only">
              <a onClick={() => navigate("/market")} className="nav-link">Markets</a>
              <a onClick={() => navigate("/funds")} className="nav-link">Mutual Funds</a>
              <a onClick={() => navigate("/news")} className="nav-link">News</a>
              <a onClick={() => navigate("/learn")} className="nav-link">Learn</a>
            </div>

            {/* DESKTOP ACTIONS */}
            {!loading && (
              <div className="nav-actions desktop-only">
                {login ? (
                  <>
                    <span className="nav-user">Hi, {userName} 👋</span>
                    <button className="classic-btn" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <button className="classic-btn" onClick={() => setShowLogin(true)}>Log in</button>
                )}
              </div>
            )}

            {/* MOBILE TOGGLE BUTTON */}
            <div className="nav-mobile-toggle">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="mobile-toggle-btn"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU - Moved OUTSIDE nav-inner but INSIDE nav */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-links-list">
                <a onClick={() => { navigate("/market"); setMobileMenuOpen(false); }}>Markets</a>
                <a onClick={() => { navigate("/funds"); setMobileMenuOpen(false); }}>Mutual Funds</a>
                <a onClick={() => { navigate("/news"); setMobileMenuOpen(false); }}>News</a>
                <a onClick={() => { navigate("/learn"); setMobileMenuOpen(false); }}>Learn</a>
                
                <hr className="mobile-divider" />
                
                {/* Mobile Specific Auth Buttons */}
                {!loading && (
                    <div className="mobile-auth">
                         {login ? (
                            <button className="classic-btn full-width" onClick={handleLogout}>Logout ({userName})</button>
                         ) : (
                            <button className="classic-btn full-width" onClick={() => { setShowLogin(true); setMobileMenuOpen(false); }}>Log in</button>
                         )}
                    </div>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* LOGIN MODAL (Unchanged logic) */}
        {showLogin && !login && (
          <div className="modal-overlay" onClick={() => setShowLogin(false)}>
            <div className="login-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowLogin(false)}>
                <X size={20} />
              </button>
              <img src={image} alt="brand" className="login-brand" width="100" />
              <h2 className="login-title">Your Money, Professionally Managed.</h2>
              <p className="login-sub">Log in or Sign up</p>
              <div className="log-center">
                <button className="google-btn" onClick={handleGoogleLogin}>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="google-logo" />
                  Sign in with Google
                </button>
              </div>
              <p className="terms">
                By continuing, you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}