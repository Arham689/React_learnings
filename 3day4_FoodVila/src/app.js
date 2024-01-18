import React, { lazy, Suspense, useState } from 'react'
import RestaurantsMenu from './components/RestaurantsMenu'
import ReactDom from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Contact from './components/Contact'
import { useState } from 'react'
import AboutClass from './components/AboutClass'
import Profile from './components/Profile'
import Shimmer from './components/shimmer'
import myContext from '../utils/constext'
import { Provider } from 'react-redux'
import store from '../utils/store'
import CartItems from './components/CartItems'

// imgBaseUrl : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nqzyryfsgpchx3qnp2y6 

//react can identify the element by its tag , but if we have multiple siblings that have same tag then we have to give them a key .
// no key (  :( not good      )<<<<<<< map ke index (last option) <<<<< unique key (best practice )


//import instamart component using lazy function 
const Instamart = lazy(() => import("./Instamart"))
// this import is different it is a promis which react handels for us 
// when we load instamart comp. first time it will throw a error because the script will take some time to load and react will try to render it 
// to resolve this error we use supense component which is provided by React developers :)
const AppLayout = () => {
  // suppose we have call a api using useEffect and we have call the setUser -> then we are sending the data to provider to use by all child components
  const [user, setUser] = useState({
    name: "arham kahn",
    email: "abdularham689@gmail.com"
  })
  return (
    <>
    <Provider store = {store}>
      {/* using mycontext.provider to over-ride the default value fo context now user and setUser is in context  */}
      <myContext.Provider value={
        {
          user,
          setUser
        }
      }>

        <Header />
        <hr />
        <Outlet />
        <Footer />

      </myContext.Provider>
      </Provider>
    </>
  )
}

const approuts = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: "/about",
          element: <AboutClass />,
          children: [
            {
              path: 'profile',
              element: <Profile name={'Arham'} />
            },
          ]
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          // any name can be retrun in the place of id , its just a name and the useParams will return a obj 
          path: '/menus/:id',
          element: <RestaurantsMenu />
        },
        {
          path: '/instamart',
          element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
          //to show the shimmer we use fallback prop supported in sespense comp which will accepet a shimmer comp. 
        },
        {
          path : "/cart",
          element : <CartItems/>
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

root.render(<RouterProvider router={approuts} />)

