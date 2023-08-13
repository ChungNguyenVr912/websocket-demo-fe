 import Feed from "../pages/Home"
 import Login from "../pages/Login"
 
 
 const publicRoutes = [
    { path: '/' , component: Feed},
    { path: '/login' , component: Login, layout: null},
    
]

export default publicRoutes