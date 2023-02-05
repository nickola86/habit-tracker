import { Habit, User } from "../components/types";
import * as HabitsApi from '../api/HabitsApi'

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  habits: Habit[];
}
export interface IHabitsService {
  getHabits(): Promise<Habit[]> | [];
}

export const useHabitsApi = (user: User): IHabitsService => {
  const _user = user
  HabitsApi.default(_user.bearer || "")
  return {
    getHabits: (): Promise<Habit[]> | [] => {return _user.isUserLoggedIn ? HabitsApi.findByUser(_user.id || 0) : []}
  }
};