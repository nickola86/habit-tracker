import { THabit, User } from "../components/types";
import * as HabitsApi from '../api/HabitsApi'
import {useRecoilValue} from "recoil";
import {userState} from "../atoms/userState";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  habits: THabit[];
}
export interface IHabitsService {
  getHabits(): Promise<THabit[]> | [];

  getHabit(id: number): Promise<THabit> | {};
}

export const useHabitsApi = (): IHabitsService => {
  const user:User = useRecoilValue<User>(userState)
  HabitsApi.default(user.bearer || "")
  return {
    getHabits: (): Promise<THabit[]> | [] => {return user.isUserLoggedIn ? HabitsApi.findByUser(user.id || 1) : []},
    getHabit: (habitId:number): Promise<THabit> | { } => {return user.isUserLoggedIn ? HabitsApi.findByUserAndHabitId(user.id || 1,habitId) : {} }
  }
};