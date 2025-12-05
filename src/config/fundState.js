// src/config/fundState.js
import { useEffect, useState } from "react";
import axios from "axios";
import { FundContext } from "./fundContext.js";

// In Vite, env vars are on import.meta.env, not process.env
const BASE_URL = `${process.env.VITE_API_URL}/api/funds`;

export default function FundProvider({ children }) {
  const [funds, setFunds] = useState();
  const [loading, setLoading] = useState(true);

  const fetchFunds = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      console.log("Response from /api/funds:", response.data);

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.funds || [];

      setFunds(data);
    } catch (err) {
      console.error("Error fetching funds:", err);
      setFunds([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  return (
    <FundContext.Provider value={{ funds, loading }}>
      {children}
    </FundContext.Provider>
  );
}
