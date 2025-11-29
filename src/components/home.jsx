import React, { useState } from 'react';
import NavBart from "./nav.jsx";
import InvestmentApp from './web.jsx';
import Footer from './footer.jsx';
import ImageMoveLeft from './poster.jsx';
import ImageMoveRight from './poster2.jsx';

export default function Web(){
    return (<div>
        <NavBart />
        <InvestmentApp />
        <ImageMoveLeft />
        <ImageMoveRight />
        <Footer />
    </div>)

}