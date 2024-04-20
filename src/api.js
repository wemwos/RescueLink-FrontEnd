import axios from "axios";

const rescuelink_api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/api',
});

export default rescuelink_api;