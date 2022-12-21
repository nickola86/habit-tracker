import { Habit, User } from "../components/types";

export interface FindAllRequest {
  user: User;
}
export interface FindAllResponse {
  habits: Habit[];
}
export interface IHabitsService {
  findAll(request: FindAllRequest): Promise<FindAllResponse>;
}

export const useHabits = (): IHabitsService => {
  return {
    findAll: (request: FindAllRequest): Promise<FindAllResponse> => {
      return new Promise((resolve, reject) => {
        const response: FindAllResponse = {
          habits: [
            {
              id: 1,
              userId: request.user.id,
              title: "Correre",
              color: "#ff0000",
              icon: "🏃",
            },
            {
                id: 2,
                userId: request.user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "🚰",
              },
              {
                id: 2,
                userId: request.user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "",
              },
              {
                id: 2,
                userId: request.user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "🚰",
              },
              {
                id: 2,
                userId: request.user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "🚰",
              },
              {
                id: 2,
                userId: request.user.id,
                title: "Bere acqua",
                color: "#00ff00",
                icon: "🚰",
              },
          ],
        };
        resolve(response);
      });
    },
  };
};
