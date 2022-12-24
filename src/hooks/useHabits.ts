import { Habit, User } from "../components/types";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  habits: Habit[];
}
export interface IHabitsService {
  fetchHabits(): Promise<Habit[]>;
}

export const useHabits = (user: User): IHabitsService => {
  return {
    fetchHabits: (): Promise<Habit[]> => {
      return new Promise((resolve, reject) => {
        const response = [
            {
              id: 1,
              userId: user.id,
              title: "Correre",
              color: "#ff0000",
              icon: "🏃",
            },
            {
                id: 2,
                userId: user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "🚰",
              },
              {
                id: 3,
                userId: user.id,
                title: "Fare la cacca",
                color: "#00ff00",
                icon: "💩",
              },
              {
                id: 4,
                userId: user.id,
                title: "Mangiare la frutta",
                color: "#00ff00",
                icon: "🍒",
              }
        ];
        setTimeout(()=>{resolve(response)},2000)
      });
    },
  };
};