import { useState, useEffect } from "react";

function useFetch(initialState) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(() => {
    if (initialState === "function") return initialState();
    return initialState;
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`${response.status} : ${response.statusText}`);
        const data = await response.json();
        const res = data.results;
        setData(res);
        //
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setUrl("");
      }
    })();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
