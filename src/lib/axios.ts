import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Para enviar cookies con las solicitudes
});
