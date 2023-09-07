import { useEffect, useState } from "react";
import apiInstance from "../Service/api";
import { notify } from "../Helper/Notify";

const useGet = (url, reload) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiInstance.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response.status === 404) {
          setError(error.message);
          notify(error.message);
        } else {
          setError(error.response.message);
          notify(error.response.message);
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [url, reload]);
  return { data, isLoading, error };
};

export default useGet;
