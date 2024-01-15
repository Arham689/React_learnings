import React , {lazy , Suspense}from 'react'
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
import AboutClass  from './components/AboutClass'
import Profile from './components/Profile'
import Shimmer from './components/shimmer'


// imgBaseUrl : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nqzyryfsgpchx3qnp2y6 

//react can identify the element by its tag , but if we have multiple siblings that have same tag then we have to give them a key .
// no key (  :( not good      )<<<<<<< map ke index (last option) <<<<< unique key (best practice )


//import instamart component using lazy function 
const Instamart = lazy(()=>import("./Instamart"))
// this import is different it is a promis which react handels for us 
// when we load instamart comp. first time it will throw a error because the script will take some time to load and react will try to render it 
// to resolve this error we use supense component which is provided by React developers :)
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
    errorElement : <ErrorPage/>,
    children :[
      {
        path :'/',
        element : <Body/>
      },
      {
        path : "/about",
        element :<AboutClass/>,
        children : [
          {
            path : 'profile',
            element : <Profile name = {'Arham'}/>
          },
        ]
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        // any name can be retrun in the place of id , its just a name and the useParams will return a obj 
        path : '/menus/:id',
        element:<RestaurantsMenu/>
      },
      {
        path : '/instamart',
        element : <Suspense fallback = {<Shimmer/>}><Instamart/></Suspense>
        //to show the shimmer we use fallback prop supported in sespense comp which will accepet a shimmer comp. 
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

