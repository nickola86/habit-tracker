import { User } from "../components/types";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "user",
    default: {isUserLoggedIn:false},
});