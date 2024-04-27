import axios from "axios";
import * as SecureStore from "expo-secure-store";
export const BASE_URL = "http://10.0.0.147:3600/";
const TIME_OUT = 30000;
const ACTIVITY_TOKEN = "activity_user_token";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})
export const saveToken = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.log("Error in SaveToken", error);
        throw (error);
    }
}
axiosInstance.interceptors.request.use(async (req) => {
    try {
        const access_token = await SecureStore.getItemAsync(ACTIVITY_TOKEN);
        req.headers["Content-Type"] = "application/json";
        req.headers.Authorization = access_token;
        return req
    } catch (error) {
        return req
    }
})

export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data)

export default axiosInstance;