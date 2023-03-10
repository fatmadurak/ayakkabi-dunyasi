import { createContext,useContext, useEffect, useState } from "react";



const BasketContext=createContext()


const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketContextProvider=({children})=>{

const[basket,setBasket]=useState(defaultBasket)

useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);


const addToBasket=(findItem,data)=>{

if (!findItem) {
    
 return setBasket((basket)=>([...basket,data]))

}

const filtered=basket.filter((basketItem)=>basketItem.id!==findItem.id)

 setBasket(filtered)
}


const values={
basket,
setBasket,
addToBasket

}


return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>

}



const UseBasketContext=()=>useContext(BasketContext)


export  {BasketContextProvider,UseBasketContext}
