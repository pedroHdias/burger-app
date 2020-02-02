import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-1a02c.firebaseio.com/"
});

export default instance;
