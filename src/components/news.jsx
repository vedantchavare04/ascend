// News.jsx
import React from "react";
import "./component.css";
import { StockContext } from "../config/stockcontext.js";
import { useContext } from "react";

export default function News() {
  const { stocks, loading } = useContext(StockContext);

  if (loading) return (
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
  )
;
  if (!stocks || !stocks.feed) return <p className="no-news">No news found.</p>;

  function formatPublished(ts) {
    if (!ts) return "";
    try {
      if (/^\d{8}T\d{6}$/.test(ts)) {
        const y = ts.slice(0, 4);
        const m = ts.slice(4, 6);
        const d = ts.slice(6, 8);
        const hh = ts.slice(9, 11);
        const mm = ts.slice(11, 13);
        const ss = ts.slice(13, 15);
        const iso = `${y}-${m}-${d}T${hh}:${mm}:${ss}Z`;
        const dt = new Date(iso);
        return new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(dt);
      }
      const dt = new Date(ts);
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(dt);
    } catch (e) {
      return ts;
    }
  }

  // helper to limit summary length
  function shortSummary(text, n = 140) {
    if (!text) return "";
    return text.length > n ? text.slice(0, n).trim() + "..." : text;
  }

  return (
    <section className="news-wrapper" aria-label="Latest news">
      <h2 className="news-title">Market News</h2>
      <div className="news-grid">
        {stocks.feed.map((item, index) => (
            <>
          <article key={index} className="news-card" tabIndex={0}>
            {item.banner_image ? (
              <div className="thumb" style={{ backgroundImage: `url(${item.banner_image})` }} aria-hidden="true" />
            ) : (
              <div className="thumb placeholder" aria-hidden="true">NEWS</div>
            )}

            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>

              <p className="meta">
                <span className="published">{formatPublished(item.time_published)}</span>
                <span className="dot">•</span>
                <span className="authors">{item.authors?.join(", ")}</span>
              </p>

              <p className="summary">{shortSummary(item.summary, 160)}</p>

              <div className="card-actions">
                <a
                  className="read-more"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read full article: ${item.title}`}
                >
                  Read Full Article
                </a>

                {item.ticker_sentiment && item.ticker_sentiment.length > 0 && (
                  <div className="badges">
                    {item.ticker_sentiment.slice(0, 2).map((t, i) => (
                      <span key={i} className={`badge badge-${t.ticker_sentiment_label?.toLowerCase().replace(/[^a-z0-9_-]/g, "-")}`}>
                        {t.ticker}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
          <hr className="news-divider" />
        </>
        ))}
      </div>
      
    </section>
  );
}