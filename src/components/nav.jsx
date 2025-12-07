import React, { useState, useContext } from "react";
import image from "../components/ascend.png";
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

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-root">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-inner container">
          {/* Brand */}
          <div className="brand" onClick={() => handleNav("/")}>
            <img src={image} alt="Ascend logo" className="brand-logo" />
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            <button onClick={() => handleNav("/market")} className="nav-link">
              Markets
            </button>
            <button onClick={() => handleNav("/funds")} className="nav-link">
              Mutual Funds
            </button>
            <button onClick={() => handleNav("/news")} className="nav-link">
              News
            </button>
            <button onClick={() => handleNav("/learn")} className="nav-link">
              Learn
            </button>
          </div>

          {/* Desktop actions */}
          {!loading && (
            <div className="nav-actions">
              {login ? (
                <>
                  <span className="nav-user">Hi, {userName} 👋</span>
                  <button className="classic-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className="primary-btn"
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </button>
              )}
            </div>
          )}

          {/* Mobile menu toggle */}
          <div className="nav-mobile-toggle">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            <button
              onClick={() => handleNav("/market")}
              className="mobile-link"
            >
              Markets
            </button>
            <button
              onClick={() => handleNav("/funds")}
              className="mobile-link"
            >
              Mutual Funds
            </button>
            <button
              onClick={() => handleNav("/news")}
              className="mobile-link"
            >
              News
            </button>
            <button
              onClick={() => handleNav("/learn")}
              className="mobile-link"
            >
              Learn
            </button>

            <hr />

            {!loading && !login && (
              <>
                <button
                  className="mobile-login"
                  onClick={() => {
                    setShowLogin(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Log in
                </button>
                <button
                  className="mobile-cta"
                  onClick={() => {
                    setShowLogin(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get started
                </button>
              </>
            )}

            {!loading && login && (
              <button className="mobile-login" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && !login && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowLogin(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <img
              src={image}
              alt="Ascend brand"
              className="login-brand"
            />

            <h2 className="login-title">
              Your Money, Professionally Managed.
            </h2>
            <p className="login-sub">Log in or Sign up</p>

            <div className="phone-input-wrap">
              <div className="country-code">+91</div>
              <input
                className="login-input"
                placeholder="Enter mobile number"
                type="tel"
              />
            </div>

            <div className="log-center">
              <div className="or">
                <span className="or-text">or</span>
              </div>
              <button
                className="google-btn"
                onClick={handleGoogleLogin}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="google-logo"
                />
                Sign in with Google
              </button>
            </div>

            <button className="continue-btn">Continue</button>

            <p className="terms">
              By continuing, you agree to our{" "}
              <a href="#">Terms of service</a> &amp;{" "}
              <a href="#">Privacy policy</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
