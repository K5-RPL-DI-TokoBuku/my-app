import axios from "axios";
import { getCookie } from "../utils/cookie";

const createAxiosInterceptor = (url) => {
  const token = getCookie('token')
  const mytoken = token.slice(1,-1)

  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Accept-Language": "es",
      "Content-Type": "application/json",
      "token": mytoken
    },
  });
  
  axiosCreate.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response.status === 401) {
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = createAxiosInterceptor('http://localhost:3001');
// const BaseService = createAxiosInterceptor(process.env.REACT_APP_API);

export default BaseService;
