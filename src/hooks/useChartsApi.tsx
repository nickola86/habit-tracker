import { Chart, User } from "../components/types";
import * as ChartsApi from '../api/ChartsApi'

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  charts: Chart[];
}
export interface IChartsService {
  getCharts(): Promise<Chart[]> | [];
}

export const useChartsApi = (user: User): IChartsService => {
  const _user = user
  ChartsApi.default(_user.bearer || "")
  return {
    getCharts: (): Promise<Chart[]> | [] => {return _user.isUserLoggedIn ? ChartsApi.findByUser(_user.id || 1) : []}
  }
};