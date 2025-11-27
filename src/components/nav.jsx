import React, { useState } from 'react';
import image from "../components/ascend.png";
import './web.css';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  PieChart,
  Menu,
  X,
  BarChart3,
  Globe,
} from 'lucide-react';

export default function NavBart(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div class="app-root">
            <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">
            <img src={image} width="150px" />
          </div>

          <div className="nav-links" aria-hidden={mobileMenuOpen ? 'false' : 'true'}>
            {['Markets', 'Mutual Funds', 'Analytics', 'Learn'].map(item => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="nav-login">Log in</button>
            <button className="primary-btn">Sign in</button>
          </div>

          <div className="nav-mobile-toggle">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-links">
              {['Markets', 'Mutual Funds', 'Analytics', 'Learn'].map(item => (
                <a key={item} href="#" className="mobile-link">{item}</a>
              ))}
              <hr />
              <button className="mobile-login">Log in</button>
              <button className="mobile-cta">Sign in</button>
            </div>
          </div>
        )}
      </nav>
        </div>
    )
}