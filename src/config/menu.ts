export const routes = [{
  pageName:'Dashboard',
  path:'/',
  requiresAuthentication: true
}]
export const settings = [
{
  pageName:'Profile', 
  path:'/profile',
  requiresAuthentication: true
},{
  pageName:'Settings',
  path:'/settings',
  requiresAuthentication: true
},{
  pageName:'Logout',
  path:'/logout',
  requiresAuthentication: true
}]