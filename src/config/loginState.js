// loginstate.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "./loginContext.js";

const LOGIN_URL = `${process.env.REACT_APP_API_URL}/api/me`;

export default function Authenticate({ children }) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.get(LOGIN_URL, {
        withCredentials: true,
      });

      const { ok, user } = response.data;

      setLogin(Boolean(ok));
      setUser(ok ? user : null);
    } catch (err) {
      console.error("Error fetching login details: ", err);
      setLogin(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <LoginContext.Provider value={{ login, user, loading }}>
      {children}
    </LoginContext.Provider>
  );
}
