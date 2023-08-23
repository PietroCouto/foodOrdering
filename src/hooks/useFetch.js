import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const get = useCallback(async (url, config = {}) => {
    try {
      const { method, headers } = config;
      setLoading(true);
      setError(false);

      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        mode: "cors",
        cache: "default",
      });

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    get,
    loading,
    error,
    data,
  };
};

export default useFetch;
