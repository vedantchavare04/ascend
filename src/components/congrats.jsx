// Congrats.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Congrats() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/me", { withCredentials: true })
      .then(r => setUser(r.data.user))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <img src={user.photos?.[0]?.value} alt="avatar" width={80} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}