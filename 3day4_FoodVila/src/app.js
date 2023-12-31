import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
// imgBaseUrl : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nqzyryfsgpchx3qnp2y6 

//react can identify the element by its tag , but if we have multiple siblings that have same tag then we have to give them a key .
// no key (  :( not good      )<<<<<<< map ke index (last option) <<<<< unique key (best practice )


const AppLayout = ()=>{
  return(
    <>
      <Header/>
      <hr/>
      <Body/>
      <Footer/>
    </>
  )
}


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

