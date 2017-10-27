import axios from "axios";
import store from "./store";

const ApiUrl = "https://labucketlist-api.herokuapp.com";
const instance = axios.create({
  baseURL : `${ApiUrl}`,
  timeout : 10000,
  headers : {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});
instance.interceptors.request.use((config) => {
  const token = store.getState().authentication.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token }`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if(error){
    if(error.response.status === 401 || error.response.status === 409) {
      alert(error.response.data.message);
      localStorage.clear()
    }
    if(error.response.status === 404){
      alert(error.response.data.message);
    }
    return Promise.reject(error);
  }});

export default instance;
