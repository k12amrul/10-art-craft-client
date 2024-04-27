import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Home from "../componnents/Home/Home";
import LottieAnimation from "../Pages/Shared/LottieAnimation";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>error rrrrrrrrr</h1>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allPrinting',
                element: <h1> allPrinting</h1>
            },
            {
                path: '/addPrinting',
                element: <h1>addPrinting</h1>
            },
            {
                path: '/myArtCraft',
                element : 
                <h1>myArtCraft</h1>
                // path: '/l',
                // element: <LottieAnimation></LottieAnimation>
            },
            {
                path: '/allArtCraft',
                element: <h1>allArtCraft</h1>
            },
           
            {
                path: '/register',
                element: <Register></Register>
            },

        ]




    }
])


export default router
