import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from "./components/home.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Web />
  </BrowserRouter>
);