import { useState, useEffect } from "react";
import axios from "axios";
import { StockContext } from "./stockcontext";

export default function StockProvider({ children }) {
  const [stocks, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "873MIO4DBT9INXVX";
  const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_URL);
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <StockContext.Provider value={{ stocks, loading }}>
      {children}
    </StockContext.Provider>
  );
}