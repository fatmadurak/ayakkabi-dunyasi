import React,{useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/AllProducts/Products"
import ProductDetail from "./Pages/ProductDetail";
import Connection from "./Pages/Connection";
import Terlik from "./Pages/AllProducts/Terlik"
import Bot from "./Pages/AllProducts/Bot"
import KlasikAyakkabi from "./Pages/AllProducts/KlasikAyakkabi"
import SporAyakkabi from "./Pages/AllProducts/SporAyakkabi"
 function App() {

 const [showScroll,setShowScroll]=useState(false);

useEffect(()=>{


  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };



},[])

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

  return (
    <>
    <Router>
    
     <Navbar/>
       

       <div className="content">
       <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="/products" exact  element={<Products/>}/>
        <Route path="/products/:id" exact  element={<ProductDetail/>}/>
        <Route path="/iletisim" exact  element={<Connection/>}/>

     
      <Route path="products/terlik" element={<Terlik/>}/>
      <Route path="products/bot" element={<Bot/>}/>
      <Route path="products/klasikAyakkabi" element={<KlasikAyakkabi/>}/>
      <Route path="products/sporAyakkabi" element={<SporAyakkabi/>}/>
        </Routes>
       
       </div>

  


     
       {
     
          
            <>
        
            <i className='fas fa-caret-square-up' style={{fontSize:"106px",color:"purple",position:"fixed"}} onClick={scrollTop}/>

     
           
          
            </>
          
    
       }
     

     
     
     
 

 


    </Router>
    </>
  );
}


export default App;

