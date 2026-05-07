import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from "./components/home.jsx";
import { HashRouter } from "react-router-dom"
import App from "./components/login.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
     <Web /> 
  </HashRouter>
);
