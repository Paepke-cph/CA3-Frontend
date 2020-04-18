import { useState, useEffect } from 'react';
import { backendUrl } from '../config/settings';

const useFetch = (url, opts) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${backendUrl}${url}`, opts);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
