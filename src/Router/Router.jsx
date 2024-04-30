import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Home from "../componnents/Home/Home";
import LottieAnimation from "../Pages/Shared/LottieAnimation";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AddProduct from "../componnents/AddProduct";
import AllArtAndCraft from "../componnents/AllArtAndCraft";
import PrivateRoute from "./PrivateRoute";
import CardDetails from "../componnents/CardDetails";
import MyArtCraft from "../componnents/MyArtCraft";
import UpdateArts from "../componnents/UpdateArts";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                loader: ()=> fetch('https://a-11-server-eight.vercel.app') ,
                // loader: ()=> fetch(`process.env.REACT_APP_API_URL`) ,
               
                element: <Home></Home>,
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
                path: '/artDetails/:id',
                loader: ()=> fetch('https://a-11-server-eight.vercel.app/arts'),
                element:  <PrivateRoute>

                    <CardDetails> </CardDetails>
                </PrivateRoute>
            },
            {
                path: '/allArtCraft',
                 loader: ()=> fetch('https://a-11-server-eight.vercel.app/arts'),
                element: <AllArtAndCraft></AllArtAndCraft>
            },
            {
                path: '/addCraftItem',
                element: <PrivateRoute> 
                    <AddProduct></AddProduct>

                </PrivateRoute> 
                
                // <h1> AddCraft Item Page:</h1>
            },
            {
                path: '/myArtCraft/:email',
                loader: ({params}) => fetch(`https://a-11-server-eight.vercel.app/myArtCraft/${params?.email}`),
                element : <PrivateRoute>

                    <MyArtCraft></MyArtCraft>
                </PrivateRoute>  
            
            },
            
            {
                path: '/art/:id',
                loader: ({params}) => fetch(`https://a-11-server-eight.vercel.app/arts/${params.id}`),
                element : <UpdateArts> </UpdateArts>
            },
           
            {
                path: '/register',
                element: <Register></Register>
            },

        ]




    }
])


export default router
