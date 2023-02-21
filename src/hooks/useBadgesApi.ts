import {Badge, THabit, User} from "../components/types";
import * as BadgesApi from "../api/BadgesApi";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  badges: Badge[];
}
export interface IBadgesService {
  getBadges(): Promise<Badge[]> | [];
}

export const useBadgesApi = (user: User): IBadgesService => {
  const _user = user
  BadgesApi.default(_user.bearer || "")
  return {
    getBadges: (): Promise<Badge[]> | [] => {return _user.isUserLoggedIn ? BadgesApi.findByUser(_user.id || 0) : []}
  }
};