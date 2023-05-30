import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { logOut } = useAuth(); // Custom hook for AuthContext
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000", // Replace with your base URL
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, [axiosSecure, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
