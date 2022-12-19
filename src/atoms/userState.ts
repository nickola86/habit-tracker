import { User } from "../types";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "user",
    default: {isUserLoggedIn:false},
});