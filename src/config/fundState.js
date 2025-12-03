// src/config/fundState.js
import { useEffect, useState } from "react";
import axios from "axios";
import { FundContext } from "./fundContext.js";

// In Vite, env vars are on import.meta.env, not process.env
const BASE_URL = "http://localhost:4000/api/funds";

export default function FundProvider({ children }) {
  const [funds, setFunds] = useState();
  const [loading, setLoading] = useState(true);

  const fetchFunds = async () => {
    try {
      setLoading(true);

      const response = await axios.get(BASE_URL);

      // ✅ axios does NOT have .ok or .json()
      //    Data is on response.data
      console.log("Response from /api/funds:", response.data);

      // If your backend returns an array:
      //   res.json(rows)
      // then response.data is already an array.
      // If it returns { funds: [...] }, handle that too:
      const data = Array.isArray(response.data)
        ? response.data
        : response.data.funds || [];

      setFunds(data);
    } catch (err) {
      console.error("Error fetching funds:", err);
      setFunds([]); // make sure it's at least an empty array
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
