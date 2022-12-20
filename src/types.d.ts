export interface Route{
    pageName: string;
    path: string,
    requiresAuthentication: boolean,
    action?:function
}

export interface User{
    id?: number
	username?: string
    password?: string,
    isUserLoggedIn?: boolean,
    loginSuccess?: boolean
}

