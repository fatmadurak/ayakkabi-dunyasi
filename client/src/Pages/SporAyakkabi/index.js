import React, { useEffect, useState } from 'react'
import {CategorySporAyakkabi} from "../../Api"
import {Grid} from '@chakra-ui/react';
import Card from "../../Components/Card.js"
function SporAyakkabi() {
  
 const [sporAyakkabiData,setSporAyakkabiData]=useState([]);

  useEffect(()=>{

     (async()=>{

      const data=await CategorySporAyakkabi();
      return setSporAyakkabiData(data)



       })()


   


  },[])


  return (
   <>
   

     {  sporAyakkabiData && (

     <Grid templateColumns="repeat(3,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
      sporAyakkabiData.map((item,key) =>(<Card item={item} key={item.id}/>)
     )

   }

   </Grid>





     )





     }




   
   </>
  )
}

export default SporAyakkabi