import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Food from './components/Food.jsx';
import Ad from './components/Ad.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:'/about',
        element:<div>i am div</div>
      },
      {
        path:'/food',
        element:<Food></Food>,
        // loader:({x})=> fetch(`https://jsonplaceholder.typicode.com/users/${x}`)
      },
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),

        
      },
      {
        path:'/addss/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<Ad></Ad>
      }
    ]
    
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
