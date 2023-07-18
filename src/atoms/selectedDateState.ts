import { atom } from "recoil";

export const selectedDateState = atom<Date>({
  key: "selectedDate",
  default: new Date()
});