import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import AllToys from '../Components/AllToys'
import MyToys from '../Components/MyToys'
import AddToys from '../Components/AddToys'
import Blogs from '../Components/Blogs'
import Login from '../Components/UserForm/Login'
import SignUp from '../Components/UserForm/SignUp'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"all-toys",
                element:<AllToys />
            },
            {
                path:"my-toys",
                element:<MyToys />
            },
            {
                path:"add-toy",
                element:<AddToys />
            },
            {
                path:"blogs",
                element:<Blogs />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"signup",
                element:<SignUp />
            },
        ]
    }
])

