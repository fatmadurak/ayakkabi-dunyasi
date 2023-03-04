import React,{useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products/index"
import ProductDetail from "./Pages/ProductDetail";
import Connection from "./Pages/Connection";
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
        <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="/products/*" exact  element={<Products/>}/>
        <Route path="/products/:product_id" exact  element={<ProductDetail/>}/>
        <Route path="/iletisim" exact  element={<Connection/>}/>
        </Routes>
       

  


     
       {
          showScroll &&
          
          (  <>
        
            <i className='fas fa-caret-square-up' style={{fontSize:"76px",color:"purple"}} onClick={scrollTop}/>

     
           
          
            </>
          )
     
       }
     

     
     
     
 

 


    </Router>
    </>
  );
}


export default App;

