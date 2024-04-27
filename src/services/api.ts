import axiosInstance from "./config"

type RegisterUserProps = IUser

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