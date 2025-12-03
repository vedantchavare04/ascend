import React, { useContext } from "react";
import "./component.css";
import { FundContext } from "../config/fundContext.js";

export default function Mutual() {
  const { funds, loading } = useContext(FundContext);

  if (loading) return <p className="loading">Loading...</p>;

  if (!funds || funds.length === 0) {
    return (
      <div>
        <p className="loading">No funds found.</p>
        <pre style={{ color: "white", fontSize: "12px" }}>
          Debug funds value: {JSON.stringify(funds, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div className="amc-page">
      <div className="amc-container">
        <h1 className="amc-title">Funds Available</h1>

        <div className="amc-grid">
          {funds.map((fund) => {
            const {
              id,
              fund_name,
              image_url,
              amc_name,
              scheme_name,
              name,
            } = fund;

            const displayName =
              fund_name || name || amc_name || scheme_name || "Unnamed Fund";

            return (
                <a href="#">
              <article key={id || displayName} className="amc-card">
                <div
                  className="card_photo"
                  style={{
                    backgroundImage: `url(${image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <h2 className="amc-name">{displayName}</h2>
              </article>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
