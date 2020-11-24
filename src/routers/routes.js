import { LoginPage, HomePage } from "../pages";

 export const routesAuth = [
    {
        name: "Login",
        path: "/",
        exact: true,
        component: LoginPage
    }
]

 export const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: HomePage
    }
    
]
