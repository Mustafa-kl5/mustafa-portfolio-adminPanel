import apiInstance from "../../Service/api";

export const setAuthToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    apiInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiInstance.defaults.headers.common["Authorization"];
  }
};
