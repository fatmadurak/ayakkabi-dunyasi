import React from 'react'
import {  useQuery } from 'react-query'

import { Box,Grid } from '@chakra-ui/react'
import {FetchProductList} from "../../Api"
import  Card  from "../../Components/Card.js"


function AllProducts() {
  const { isLoading, error, data } = useQuery("products",FetchProductList)
  
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message

  
  return (
   <>
   <Box>
   
   <Grid templateColumns="repeat(4,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
         data.map((item,key) =>(<Card item={item} key={item.id}/>)
        )

   }

</Grid>
  

   </Box>
   
   
   
   </>
  )
}

export default AllProducts