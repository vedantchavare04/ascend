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
  const { login, user, loading } = useContext(LoginContext); // <-- include loading
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
      {/* main content that will be blurred when modal opens */}
      <div className={`content ${showLogin ? "blurred" : ""}`}>
        <nav className="nav">
          <div className="nav-inner container">
            <div className="brand">
              <img src={image} alt="brand" width="150" />
            </div>

            <div
              className="nav-links"
              aria-hidden={mobileMenuOpen ? "false" : "true"}
            >
              <a onClick={() => navigate("/market")} className="nav-link">
                Markets
              </a>
              <a onClick={() => navigate("/funds")} className="nav-link">
                Mutual Funds
              </a>
              <a onClick={() => navigate("/news")} className="nav-link">
                News
              </a>
              <a onClick={() => navigate("/learn")} className="nav-link">
                Learn
              </a>
            </div>

            {/* RIGHT SIDE ACTIONS */}
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
                    className="classic-btn"
                    onClick={() => setShowLogin(true)}
                  >
                    Log in
                  </button>
                )}
              </div>
            )}

            <div className="nav-mobile-toggle">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="mobile-toggle-btn "
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-links">
                <a onClick={() => navigate("/market")} className="nav-link">
                  Markets
                </a>
                <a onClick={() => navigate("/funds")} className="nav-link">
                  Mutual Funds
                </a>
                <a onClick={() => navigate("/news")} className="nav-link">
                  News
                </a>
                <a onClick={() => navigate("/learn")} className="nav-link">
                  Learn
                </a>
                <hr />
                {!loading && !login && (
                  <button
                    className="mobile-login"
                    onClick={() => {
                      setShowLogin(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Log in
                  </button>
                )}
                {!loading && login && (
                  <button className="mobile-login" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Modal overlay */}
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
                <X size={20} />
              </button>

              <img
                src={image}
                alt="brand"
                className="login-brand"
                width="100"
              />

              <h2 className="login-title">
                Your Money, Professionally Managed.
              </h2>
              <p className="login-sub">Log in or Sign up</p>

              <div className="log-center">{/* <-- className, not class */}
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
    </div>
  );
}
