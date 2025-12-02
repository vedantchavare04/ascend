import React, { useState } from 'react';
import NavBart from "./nav.jsx";
import InvestmentApp from './web.jsx';
import Footer from './footer.jsx';
import ImageMoveLeft from './poster.jsx';
import ImageMoveRight from './poster2.jsx';
import { Routes, Route } from "react-router-dom";
import News from './news.jsx';
import StockProvider from '../config/stockstate.js';
import Benefit from './benefits.jsx';

export default function Web(){
    return (
    <Routes>
    <Route exact path="/" element={<div>
        <NavBart />
        <InvestmentApp />
        <ImageMoveLeft />
        <ImageMoveRight />
        <Benefit />
        <Footer />
         </div>} />

        <Route exact path="/news" element={<div>
             <StockProvider>
            <News />
            </StockProvider>
        </div>
        } />
    </Routes>
)

}