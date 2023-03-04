import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AllProducts from "./AllProducts"
import Terlik from "./Terlik"
import Bot from "./Bot"
import KlasikAyakkabi from "./KlasikAyakkabi"
import SporAyakkabi from "./SporAyakkabi"
function index() {
  return (
   <>
 
    <BrowserRouter>

    <Routes>
      <Route path="allProducts" element={<AllProducts/>}/>
      <Route path="terlik" element={<Terlik/>}/>
      <Route path="bot" element={<Bot/>}/>
      <Route path="klasikAyakkabi" element={<KlasikAyakkabi/>}/>
      <Route path="sporAyakkabi" element={<SporAyakkabi/>}/>
    </Routes>
    </BrowserRouter>
 
 
   </>
  )
}

export default index