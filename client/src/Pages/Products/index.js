import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AllProducts from "./AllProducts"

function index() {
  return (
   <>
 
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<AllProducts/>}/>
    </Routes>
    </BrowserRouter>
 
 
   </>
  )
}

export default index