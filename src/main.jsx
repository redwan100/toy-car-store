import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'
import { router } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
