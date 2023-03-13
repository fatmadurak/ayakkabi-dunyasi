import React,{useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products"
import ProductDetail from "./Pages/ProductDetail";
import Terlik from "./Pages/Terlik";
import Bot from "./Pages/Bot"
import KlasikAyakkabi from "./Pages/KlasikAyakkabi"
import SporAyakkabi from "./Pages/SporAyakkabi"
import { ArrowUpIcon } from "@chakra-ui/icons";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/Profile";
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
       

       <div >
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/products/:product_id"  element={<ProductDetail/>}/>
        <Route path="/products/terlik" element={<Terlik/>}/>
        <Route path="/products/bot" element={<Bot/>}/>
        <Route path="/products/klasikAyakkabi" element={<KlasikAyakkabi/>}/>
        <Route path="/products/sporAyakkabi" element={<SporAyakkabi/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route  path="/profile"element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        
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

