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
  Handshake,
} from 'lucide-react';

const IsometricBSE = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#f3f4f6" stroke="#1f2937" strokeWidth="2" />
    <path d="M20 140 L20 150 L100 190 L180 150 L180 140" fill="#e5e7eb" stroke="#1f2937" strokeWidth="2" />
    <path d="M60 120 L60 40 L140 80 L140 160 L60 120" fill="white" stroke="#1f2937" strokeWidth="2" />
    <path d="M60 40 L100 20 L180 60 L140 80" fill="#f9fafb" stroke="#1f2937" strokeWidth="2" />
    <path d="M140 80 L180 60 L180 140 L140 160" fill="#e5e7eb" stroke="#1f2937" strokeWidth="2" />
    <path d="M60 50 L140 90" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"/>
    <path d="M60 60 L140 100" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"/>
    <path d="M60 70 L140 110" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"/>
    <path d="M60 80 L140 120" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"/>
    <text x="140" y="50" style={{fontSize: '10px', fill: '#1f2937', fontWeight: 700}}>BSE</text>
  </svg>
);

const IsometricNSE = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 180 L20 140 L100 100 L180 140 Z" fill="#f3f4f6" stroke="#1f2937" strokeWidth="2" />
    <path d="M50 125 L50 65 L110 95 L110 155 L50 125" fill="white" stroke="#1f2937" strokeWidth="2" />
    <path d="M50 65 L90 45 L150 75 L110 95" fill="#f9fafb" stroke="#1f2937" strokeWidth="2" />
    <path d="M110 95 L150 75 L150 135 L110 155" fill="#e5e7eb" stroke="#1f2937" strokeWidth="2" />
    <path d="M50 85 L110 115" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>
    <path d="M50 105 L110 135" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>
    <path d="M70 55 L70 135" stroke="#1f2937" strokeWidth="1" opacity="0.3" transform="skewY(26)"/>
    <path d="M130 65 L130 145" stroke="#1f2937" strokeWidth="1" opacity="0.3" transform="skewY(-26)"/>
    <text x="40" y="50" style={{fontSize: '10px', fill: '#1f2937', fontWeight: 700}}>NSE</text>
  </svg>
);

const IsometricMutualFund = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 170 L30 135 L100 100 L170 135 Z" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
    <path d="M60 120 L60 90 L80 100 L80 130 L60 120" fill="#34d399" stroke="#047857" strokeWidth="2" />
    <path d="M60 90 L80 80 L100 90 L80 100" fill="#6ee7b7" stroke="#047857" strokeWidth="2" />
    <path d="M80 100 L100 90 L100 120 L80 130" fill="#10b981" stroke="#047857" strokeWidth="2" />
    <path d="M90 115 L90 65 L110 75 L110 125 L90 115" fill="#34d399" stroke="#047857" strokeWidth="2" />
    <path d="M90 65 L110 55 L130 65 L110 75" fill="#6ee7b7" stroke="#047857" strokeWidth="2" />
    <path d="M110 75 L130 65 L130 115 L110 125" fill="#10b981" stroke="#047857" strokeWidth="2" />
    <ellipse cx="100" cy="40" rx="15" ry="8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    <path d="M85 40 L85 50 C85 55 115 55 115 50 L115 40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
  </svg>
);

export default function InvestmentApp() {
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  
  return (
    <div className="app-root">
      <main className="hero container">
        <section className="hero-left">
          <div className="pill"> <span className="pulse-dot" /> Live Market Updates</div>

          <h1 className="hero-title">
            Smart investing
            <br />
            <span className="gradient-text">simplified.</span>
          </h1>
          <p className="hero-sub">We help you invest in the right stocks and mutual funds—backed by research &amp; expertise</p>
          <div className="hero-cta-row">
            <button className="cta-primary">
              Start Investing <ArrowRight className="icon-inline" />
            </button>
          </div>

          <div className="claims">
            <div className="claim"><Shield className="claim-icon" /> SEBI Registered</div>
            <div className="claim"><Shield className="claim-icon" /> 100% Secure</div>
          </div>
        </section>

        <section className="hero-right">
          <div className="isometric-stage">
            <div className="grid-floor" />

            <svg className="connect-lines" viewBox="0 0 700 450" preserveAspectRatio="none" aria-hidden>
              <path d="M120 370 C 240 370, 240 270, 350 270" stroke="#cbd5e1" strokeWidth="2" fill="none"
                className={hoveredBuilding === 'bse' ? 'connect-highlight' : ''} />
              {hoveredBuilding === 'bse' && (
                <circle r="4" fill="#10b981">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M120 370 C 240 370, 240 270, 350 270" />
                </circle>
              )}

              <path d="M580 370 C 460 370, 460 270, 350 270" stroke="#cbd5e1" strokeWidth="2" fill="none"
                className={hoveredBuilding === 'nse' ? 'connect-highlight' : ''} />
              {hoveredBuilding === 'nse' && (
                <circle r="4" fill="#10b981">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M580 370 C 460 370, 460 270, 350 270" />
                </circle>
              )}
            </svg>

            <div className="iso-container">
              <div
                className="building bse building-card"
                onMouseEnter={() => setHoveredBuilding('bse')}
                onMouseLeave={() => setHoveredBuilding(null)}
              >
                <div className={`iso-wrap ${hoveredBuilding === 'bse' ? 'iso-hover' : 'iso-float-1'}`}>
                  <IsometricBSE className="iso-svg" />
                  <div className={`tooltip ${hoveredBuilding === 'bse' ? 'tooltip-visible' : ''}`}>
                    <div className="tiny-label">SENSEX</div>
                    <div className="positive"><TrendingUp className="tiny-icon" /> +1.24%</div>
                  </div>
                </div>
              </div>

              <div
                className="building nse building-card"
                onMouseEnter={() => setHoveredBuilding('nse')}
                onMouseLeave={() => setHoveredBuilding(null)}
              >
                <div className={`iso-wrap ${hoveredBuilding === 'nse' ? 'iso-hover' : 'iso-float-2'}`}>
                  <IsometricNSE className="iso-svg" />
                  <div className={`tooltip ${hoveredBuilding === 'nse' ? 'tooltip-visible' : ''}`}>
                    <div className="tiny-label">NIFTY 50</div>
                    <div className="positive"><TrendingUp className="tiny-icon" /> +0.85%</div>
                  </div>
                </div>
              </div>

              <div
                className="building mf building-card"
                onMouseEnter={() => setHoveredBuilding('mf')}
                onMouseLeave={() => setHoveredBuilding(null)}
              >
                <div className={`iso-wrap ${hoveredBuilding === 'mf' ? 'iso-hover' : 'iso-float-3'}`}>
                  <IsometricMutualFund className="iso-svg" />
                  <div className="badge-new">New!</div>
                </div>

                <div className="portfolio-label">
                  <div className="portfolio-title">Your Portfolio</div>
                  <div className="portfolio-sub">Automated Growth</div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <section className="features container">
        <div className="features-head">
          <h2>One platform. Limitless possibilities.</h2>
          <p>Everything you need to manage your wealth.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><BarChart3 /></div>
            <h3>Advanced Analytics</h3>
            <p>Data, research, and strategy—built into every decision</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-emerald"><PieChart /></div>
            <h3>Smart Mutual Funds</h3>
            <p>We help you invest in high-quality mutual funds for long-term wealth.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-purple"><Handshake /></div>
            <h3>Global Investing</h3>
            <p>Client-funded portfolios managed for consistent returns.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner container">
          <div className="footer-brand">
            <img src={image} width="150px" height="140px"/>
          </div>

          <div className="copyright">© 2025 Ascend Technologies Pvt Ltd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
