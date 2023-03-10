import { createContext,useContext, useEffect, useState } from "react";



const BasketContext=createContext()


const defaultItem= localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

const BasketContextProvider=({children})=>{

const[items,setItems]=useState(defaultItem)

useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);


const values={

items,
setItems

}


return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>

}



const UseBasketContext=()=>useContext(BasketContext)


export  {BasketContextProvider,UseBasketContext}
