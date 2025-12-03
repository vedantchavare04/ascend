import React from "react";

export default function Learn(){
    return (
        <div className="ascend-page">
      <div className="ascend-container">
        <header className="ascend-header">
          <h1 className="ascend-title">Getting Started with Ascend</h1>
          <p className="ascend-subtitle">
            A simple, protected way to invest in funds and stocks — managed for
            you by <span>Vedant Chavare</span>.
          </p>
        </header>

        <section className="ascend-section">
          <h2 className="section-heading">How Ascend Works</h2>

          <div className="steps-grid">
            <article className="step-card">
              <div className="step-badge">1</div>
              <h3 className="step-title">Login or Sign Up</h3>
              <p className="step-text">
                Create your Ascend account or log in instantly using{" "}
                <strong>Google Sign-In</strong>. Your profile and folios are
                securely linked to your email.
              </p>
            </article>

            <article className="step-card">
              <div className="step-badge">2</div>
              <h3 className="step-title">Choose Your Investment</h3>
              <p className="step-text">
                Browse curated <strong>funds</strong> and <strong>stocks</strong>.
                View key details, risk profile, and past performance to decide
                where you want to invest.
              </p>
            </article>

            <article className="step-card">
              <div className="step-badge">3</div>
              <h3 className="step-title">Enter Amount & Lock-in</h3>
              <p className="step-text">
                Start with as little as <strong>₹100</strong> and choose a{" "}
                <strong>lock-in period of at least 1 week</strong>. Confirm your
                investment details on the payment screen.
              </p>
            </article>

            <article className="step-card">
              <div className="step-badge">4</div>
              <h3 className="step-title">Pay Securely</h3>
              <p className="step-text">
                Complete your payment using supported methods. Once successful,
                your folio is created and actively managed by{" "}
                <strong>Vedant Chavare</strong>.
              </p>
            </article>

            <article className="step-card">
              <div className="step-badge">5</div>
              <h3 className="step-title">Track & Receive Updates</h3>
              <p className="step-text">
                Sit back and let Ascend handle the rest. All{" "}
                <strong>folio details, performance updates, and important
                notifications</strong> are delivered directly to your{" "}
                <strong>email</strong>.
              </p>
            </article>
          </div>
        </section>

        <section className="ascend-section rules-section">
          <h2 className="section-heading">Ascend Investment Rules</h2>

          <div className="rules-grid">
            <article className="rule-card">
              <h3 className="rule-title">1. Loss Protection</h3>
              <p className="rule-text">
                If any selected fund or stock is in loss by <strong>any percentage</strong>,
                you will incur a maximum loss of <strong>only 1%</strong> on that
                investment. Ascend absorbs the rest of the downside.
              </p>
            </article>

            <article className="rule-card">
              <h3 className="rule-title">2. Profit Sharing</h3>
              <p className="rule-text">
                For any percentage of gain on a fund or stock,{" "}
                <strong>Ascend takes 0.5%</strong> as a platform fee. The
                remaining profit stays with you.
              </p>
            </article>

            <article className="rule-card">
              <h3 className="rule-title">3. Minimum Investment</h3>
              <p className="rule-text">
                The <strong>minimum amount</strong> to start investing on Ascend
                is <strong>₹100</strong>, making it simple to begin your journey
                with small, consistent steps.
              </p>
            </article>

            <article className="rule-card">
              <h3 className="rule-title">4. Lock-in Period</h3>
              <p className="rule-text">
                Each investment has a minimum <strong>lock-in of 1 week</strong>.
                This ensures a reasonable time frame for execution and
                management of your positions.
              </p>
            </article>

            <article className="rule-card">
              <h3 className="rule-title">5. Managed by Vedant Chavare</h3>
              <p className="rule-text">
                All funds and stocks on Ascend are actively{" "}
                <strong>managed by Vedant Chavare</strong>, focusing on risk-aware
                growth and disciplined strategy.
              </p>
            </article>

            <article className="rule-card">
              <h3 className="rule-title">6. Email-based Folio Updates</h3>
              <p className="rule-text">
                Every piece of information related to your{" "}
                <strong>folios, returns, lock-in status, and changes</strong> is
                sent directly to your <strong>registered email address</strong>.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}