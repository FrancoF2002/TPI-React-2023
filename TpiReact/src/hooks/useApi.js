import { useState, useEffect } from "react";

export function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const API_KEY = import.meta.env.VITE_API_MOVIES_AUTH_TOKEN;

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
