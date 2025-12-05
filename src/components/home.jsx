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
import Mutual from './mutual.jsx';
import FundProvider from '../config/fundState.js';
import StockStatus from './market.jsx';
import Learn from './learn.jsx';
import Authenticate from '../config/loginState.js';

export default function Web(){
    return (
    <Routes>
    <Route exact path="/" element={<div>
        <Authenticate>
        <NavBart />
        <InvestmentApp />
        <ImageMoveLeft />
        <ImageMoveRight />
        <Benefit />
        <Footer />
        </Authenticate>
         </div>} />

        <Route exact path="/news" element={<div>
             <StockProvider>
            <News />
            </StockProvider>
        </div>
        } />

        <Route exact path="/funds" element={<div>
            <FundProvider>
            <Mutual />
            </FundProvider>
        </div>
        } />

        <Route exact path="/market" element={<div>
            <StockStatus />
        </div>
        } />

        <Route exact path="/learn" element={<div>
            <Learn />
        </div>
        } />

    </Routes>
)

}