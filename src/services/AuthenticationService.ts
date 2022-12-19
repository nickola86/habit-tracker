import { User } from "../types";
export interface LoginRequest{
    user: User
}
export interface LoginResponse{
    status: boolean,
    user: User
}
export interface IAuthenticationService {
    login(request: LoginRequest): Promise<LoginResponse>
}