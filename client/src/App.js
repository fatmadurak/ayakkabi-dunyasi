import React,{useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/AllProducts/Products"
import ProductDetail from "./Pages/AllProducts/Products/ProductDetail";
import Connection from "./Pages/Connection";
import Terlik from "./Pages/AllProducts/Terlik"
import Bot from "./Pages/AllProducts/Products/Bot"
import KlasikAyakkabi from "./Pages/AllProducts/Products/KlasikAyakkabi"
import SporAyakkabi from "./Pages/AllProducts/Products/SporAyakkabi"
import { ArrowUpIcon } from "@chakra-ui/icons";
 function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
    <Router>
    
     <Navbar/>
       

       <div className="content">
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/products/:id" exact  element={<ProductDetail/>}/>
        <Route path="/iletisim" exact  element={<Connection/>}/>

     
        <Route path="/terlik" element={<Terlik/>}/>
        <Route path="/bot" element={<Bot/>}/>
        <Route path="/klasikAyakkabi" element={<KlasikAyakkabi/>}/>
        <Route path="/sporAyakkabi" element={<SporAyakkabi/>}/>
        </Routes>
       
       </div>

  


     
       {
     
          
            <>
        
           {showButton && (

          
            
            <button onClick={scrollToTop} className="back-to-top">
            <ArrowUpIcon mb="0.5" ml="0.5" />
            Yukarı Çık
          </button>
         





           )  }

          

     
           
          
            </>
          
    
       }
     

     
     
     
 

 


    </Router>
    </>
  );
}


export default App;

