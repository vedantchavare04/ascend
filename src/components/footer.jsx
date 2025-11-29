import react from "react";
import image from "../components/ascend.png";
import './web.css';

export default function Footer(){
    return (
        <div>
            <footer className="site-footer">
                <div className="footer-inner container">
                <div className="footer-brand">
                    <img src={image} width="150px" height="140px"/>
                </div>

          <div className="copyright">© 2025 Ascend Technologies Pvt Ltd. All rights reserved.</div>
        </div>
        </footer>
        </div>
    )
}