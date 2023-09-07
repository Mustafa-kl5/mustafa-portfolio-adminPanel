import { useState } from "react";
import apiInstance from "../Service/api";
import { notify } from "../Helper/Notify";

const usePostAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const sendData = async (url, dataToSend) => {
    try {
      setIsLoading(true);
      const response = await apiInstance.post(url, dataToSend);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.status) {
        notify("Fields required");
        setError(error.response);
      } else {
        setError(error.response);
      }

      setIsLoading(false);
    }
  };

  return { data, isLoading, error, sendData };
};

export default usePostAxios;
