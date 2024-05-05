import { IAuthenticatedUser, IUser } from "types";
import axiosInstance, { ACTIVITY_TOKEN, saveToken } from "./config"

type RegisterUserProps = IUser;
type LoginUserProps = IAuthenticatedUser;

export const registerUser = async ({ email, name, password }: RegisterUserProps) => {
    try {
        const response = await axiosInstance.post("user/create", {
            name,
            email,
            password
        })
        return response.data.user;
    } catch (error) {
        console.log('Error while Register User', error)
        throw (error)
    }
}

export const loginUser = async ({ email, password }: LoginUserProps) => {
    try {
        const response = await axiosInstance.post("user/login", {
            email,
            password
        })
        const _token = response.data.token;
        axiosInstance.defaults.headers.common["Authorization"] = _token;
        saveToken(ACTIVITY_TOKEN, _token)
        return response.data.user;
    } catch (error) {
        console.log('Error while Login User', error)
        throw (error)
    }

}
