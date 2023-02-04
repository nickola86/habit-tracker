import { atom } from "recoil";

export const bearerState = atom<string>({
    key: "bearer",
    default: "",
});