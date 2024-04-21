import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUserGlobalStore {
    user: IAuthenticatedUser | null,
    updateUser: (user: IUser | null) => void
}

const useUserGlobalStore = create<IUserGlobalStore>()(
    persist((set, get) => ({
        user: null,
        updateUser: (user) => {
            set({ user, })
        },
    }),
        {
            name: "activity-app-user-storage",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)

export default useUserGlobalStore;