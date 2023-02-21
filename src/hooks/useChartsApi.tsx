import { Chart, User } from "../components/types";
import * as ChartsApi from '../api/ChartsApi'
import {useRecoilValue} from "recoil";
import {userState} from "../atoms/userState";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  charts: Chart[];
}
export interface IChartsService {
  getCharts(): Promise<Chart[]> | [];
}

export const useChartsApi = (): IChartsService => {
  const user:User = useRecoilValue<User>(userState)

  ChartsApi.default(user.bearer || "")
  return {
    getCharts: (): Promise<Chart[]> | [] => {return user.isUserLoggedIn ? ChartsApi.findByUser(user.id as number) : []}
  }
};