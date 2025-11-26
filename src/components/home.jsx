import ReactDOM from 'react-dom/client';
import image from "../components/foodine.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:3001";

function AppLoader({ children, duration = 1400 }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  return (
    <>
      {showLoader ? (
        <div className="splash-root" role="status" aria-label="Loading site">
          <div className="splash-card">
            <div className="logo-anim">
                <img src={image} width="340px" height="210px" />
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
function App(props){
  const [showLogin, setShowLogin] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [hidden, setHidden] = useState(false);

   const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  const payload = {
    username: form.username.trim(),
    password: form.password,
  };

  try {
    // 1) Try login
    const res = await axios.post(`${API_BASE}/api/login`, payload);

    setMessage(`✅ Logged in as ${res.data.user.username}`);
    setHidden(true);
    // setShowLogin(false);  // optionally close modal

  } catch (err) {
    // If backend responded with something
    if (err.response) {
      const { status, error } = err.response.data || {};

      // CASE 1: user does NOT exist → auto-register
      if (status !== 401 && error === "USER_NOT_FOUND") {
        try {
          const regRes = await axios.post(
            `${API_BASE}/api/register`,
            payload
          );

          setMessage(
            `🆕 Account created & registered as ${regRes.data.user.username}`
          );
          // Optional: now auto-login or just treat as logged-in
          // setShowLogin(false);
        } catch (regErr) {
          setMessage(
            regErr.response?.data?.error || "Registration Success"
          );
        }
        return;
      }

      // CASE 2: user exists but password wrong
      if (error === "WRONG_PASSWORD") {
        setMessage("❌ Incorrect password for this username.");
        return;
      }

      // Other errors
      setMessage(err.response.data.error || "Login failed");
    } else {
      // No response from server
      setMessage("Server unreachable");
    }
  }
};

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: call API etc.
    setShowLogin(false);
  };
  //  blurry login
  const [blurred, setBlurred] = useState(false);

  function Blurs(){
      setBlurred(b => !b)
      {blurred?document.documentElement.style.filter = "blur(2px)":document.documentElement.style.filter = "none"}
    }

    return <div className={`header`}>
    <div class="logo" >
    <img src={image} width="200px" height="120px" />
    </div>
    <nav>
    <div class="nav" >
        <div>
        <input placeholder="Search for products..." type="text" name="text" class="input"></input>
        <button class="searchButton" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
    <g clip-path="url(#clip0_2_17)">
    <g filter="url(#filter0_d_2_17)">
      <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
    </g>
  </g>
  <defs>
    <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
      <feOffset dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="out"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
    </filter>
    <clipPath id="clip0_2_17">
      <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
    </clipPath>
  </defs>
    </svg>
    </button>
</div>
    </div>
    </nav>
    <div>
      {!hidden && (
    <button className='btn' onClick={() => setShowLogin(true)}> Login
    </button>
      )}
    </div>
    <div class="mycart" >
        <button class="cartBtn" onClick={() => setShowCart(true)}>
    <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
    My Cart
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
    </button>
    </div>
    {/* login ui */}
     {showLogin && (
        <div className="overlay">
          <div className="login-modal">
            <button
              className="back-btn"
              onClick={() => setShowLogin(false)}
              aria-label="Close"
            >
              ←
            </button>

            <img className="login-log" src={image}></img>

            <h2 className="descri-login">Only platform for last minute delivery</h2>
            <p className="login-subtitle">Log in or Sign up</p>

            <form  onSubmit={handleSubmit} className="login-form form">
              {/* <div className="phone-input"> */}
                <input type="String" placeholder="Name" name="username" value={form.username} onChange={handleChange} required/>
              <input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} required/>
              {/* </div> */}

              <button class="oauthButton" type="submit">
                    Continue
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                </button>
                {message && <p className="message">{message}</p>}
            </form>

            <p className="terms">
              By continuing, you agree to our{" "}
              <a href="/">Terms of Service</a> &amp;{" "}
              <a href="/">Privacy Policy</a>.
            </p>
          </div>
        </div>
      )}
      {/* cart ui */}
      {showCart && (
        <div className="overlay2" onClick={() => setShowCart(false)}>
          {/* stop overlay click from closing when you click inside the panel */}
          <aside
            className="cart-panel2"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="cart-header2">
              <button
                className="cart-back-btn"
                onClick={() => setShowCart(false)}
              >
                ←
              </button>
              <span className="card-toping">Cart</span>
            </header>

            <div className="cart-body">
              <h3 className="cart-descri">Extremely Sorry 😔</h3>
            </div>
            <div className="sorry">
            <h3 className="cart-detail">We don't actually deliver any of the mentioned services</h3>
            </div>
          </aside>
          
        </div>
      )}
    </div>
};

export {App,AppLoader};