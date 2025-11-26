import React from 'react';
import ReactDOM from 'react-dom/client';
import InvestmentApp from "./components/web.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <InvestmentApp />
  </BrowserRouter>
);