import { User } from "../components/types";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "user",
    //default: {isUserLoggedIn:false},
    default: {
        id:1,
        username:'nicola',
        password:'ditrani',
        isUserLoggedIn:true,
        loginSuccess:true,
    },
});