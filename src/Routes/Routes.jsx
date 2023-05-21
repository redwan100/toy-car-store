import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'


import AddToys from '../Components/AddToys'

import Login from '../Components/UserForm/Login'
import SignUp from '../Components/UserForm/SignUp'
import Home from '../Pages/Home/Home'

import ToyDetails from '../Components/AllToys/ToyDetails'
import MyToys from '../Components/MyToys/MyToys'
import ToysUpdate from '../Components/ToysUpdate'
import Error from '../Pages/Error'
import UpdateToy from '../Components/UpdateToy'
import PrivetRoute from '../PrivetRoutes/PrivetRoute'
import AllToys from '../Components/AllToys/AllToys'
import Blogs from '../Pages/Blogs'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-toys",
        element: <AllToys />,
      },
      {
        path: "toyDetails/:id",
        element: <PrivetRoute>
           <ToyDetails />
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toyDetails/${params.id}`),
      },
      {
        path: "my-toys",
        element: <MyToys />,
      },
 
      {
        path: "add-toy",
        element: <AddToys />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

