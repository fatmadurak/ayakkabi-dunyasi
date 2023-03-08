import React, { useEffect, useState } from 'react'
import {CategorySporAyakkabi} from "../../Api"
import {Grid,Box} from '@chakra-ui/react';
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
    <Box className="content">

     {  sporAyakkabiData && (
 
     <Grid templateColumns="repeat(3,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
      sporAyakkabiData.map((item,key) =>(<Card item={item} key={item.id}/>)
     )

   }

   </Grid>





     )





     }



</Box>
   </>
  )
}

export default SporAyakkabi