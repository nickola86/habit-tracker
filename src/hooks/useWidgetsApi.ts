import {THabit, TWidget, User} from "../components/types";
import * as WidgetsApi from '../api/WidgetsApi'
import {useRecoilValue} from "recoil";
import {userState} from "../atoms/userState";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  habits: TWidget[];
}
export interface IWidgetsService {
  getWidgets(habitId:number): Promise<TWidget[]> | [];
}

export const useWidgetsApi = (): IWidgetsService => {
  const user:User = useRecoilValue<User>(userState)
  WidgetsApi.default(user.bearer || "")
  return {
    getWidgets: (habitId:number): Promise<TWidget[]> | [] => {return user.isUserLoggedIn ? WidgetsApi.findByUserAndHabitId(user.id || 1,habitId) : [] }
  }
};