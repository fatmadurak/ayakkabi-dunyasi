import { createContext,useContext, useEffect, useState } from "react";
import { fetchMe } from "../Api";

const AuthContext=createContext();



const AuthContextProvider=({children})=>{

const[loggedIn,setLoggedIn]=useState(false);
const[user,SetUser]=useState(null);

useEffect(()=>{

    (async()=>{
  
      const loginData =JSON.parse(localStorage.getItem('data'))
      const me= await fetchMe()
  
      if (loginData !==null) {
          
       const newMe=  me.find((item)=>item.email===loginData .email)
       setLoggedIn(true) 
       setUser(newMe)
  
      }
  
  
  
    })()
  
  
  },[])

// const login=(data)=>

// {

//   setLoggedIn(true)
//   setUser(data)
//   localStorage.setItem('data', JSON.stringify(data));

// }


//const logout=()=>{

//   setLoggedIn(false)
//   setUser(null)
//  localStorage.removeItem("data");
    
//}


const values={

    loggedIn,
    setLoggedIn,
    user,
    setUser,
   

}


return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}




const UseAuthContext=useContext(AuthContext)


export default{AuthContext,AuthContextProvider}