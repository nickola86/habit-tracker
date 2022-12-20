import { User } from "../types";

export interface LoginRequest{
    user: User
}
export interface LoginResponse{
    status: string,
    user: User
}
export interface IAuthenticationService {
    login(request: LoginRequest): Promise<LoginResponse>
}

export const useAuthenticationService = (): IAuthenticationService => {
    return {
        login: (request: LoginRequest)=>{
            return new Promise((resolve, reject) => {
                let response: LoginResponse;
                if(request.user.username==='nicola' && request.user.password==='ditrani'){
                    response = {
                        status: 'success',
                        user:{...request.user, id:1, isUserLoggedIn: true}
                    }
                }else{
                    response = {
                        status: 'fail',
                        user:{...request.user, isUserLoggedIn: false}
                    }
                }
                resolve(response);
              });
        }
    }
}