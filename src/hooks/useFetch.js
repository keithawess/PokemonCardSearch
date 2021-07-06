import { useState, useEffect } from "react";

const baseUrl = "https://api.pokemontcg.io/v2/cards?";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);
    async function callAPI() {
      setLoading(true);
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();

          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong. Please try again later");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  return { data, error, loading };
}
