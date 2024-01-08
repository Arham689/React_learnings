import React from 'react'
import RestaurantsMenu from './components/RestaurantsMenu'
import ReactDom from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import {RouterProvider , createBrowserRouter , Outlet} from 'react-router-dom'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Contact from './components/Contact'
import { useEffect } from 'react'
// imgBaseUrl : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nqzyryfsgpchx3qnp2y6 

//react can identify the element by its tag , but if we have multiple siblings that have same tag then we have to give them a key .
// no key (  :( not good      )<<<<<<< map ke index (last option) <<<<< unique key (best practice )


const AppLayout = ()=>{
  return(
    <>
      <Header/>
      <hr/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const approuts = createBrowserRouter(
  [
  {
    path:'/',
    element :<AppLayout/>,
    // errorElement : <ErrorPage/>,
    children :[
      {
        path :'/',
        element : <Body/>
      },
      {
        path : "/about",
        element :<About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        // any name can be retrun in the place of id , its just a name and the useParams will return a obj 
        path : '/menus/:id',
        element:<RestaurantsMenu/>
      }

    ]
    
  },
  // {
  //   path:'/about',
  //   element:[<Header/> , <About/> , <Footer/>],
  //   errorElement: <ErrorPage/>
  // }
  ]
  )
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={approuts}/>)

