import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "./loginContext.js";

const LOGIN_URL = `http://localhost:4000/api/me`;

export default function Authenticate({ children }) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const fetchLogin = async () => {
    try {
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
    }
  };

  useEffect(() => {
    fetchLogin();
  }, []); 

  return (
    <LoginContext.Provider value={{ login, user }}>
      {children}
    </LoginContext.Provider>
  );
}
