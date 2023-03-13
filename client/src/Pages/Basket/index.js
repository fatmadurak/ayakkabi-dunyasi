import React from 'react'
import { Box,Alert,AlertIcon,AlertDescription, Grid ,Text,Image} from '@chakra-ui/react'
import { UseBasketContext } from '../../context/BasketContext'

function Basket() {

  const {basket}=UseBasketContext()

  console.log(basket)
  return (
    <Box  mt={150}  >
  
   {  
     basket>0 && (

    <>
     
      
      <Grid templateRows={"repeat(auto,1fr)"}>

      {

       basket.map((basketItem)=>{

       <Box>
    
         <Text>{basketItem.title}</Text>

         <Box>

          <p>{basketItem.description}</p>
        
        </Box>


        <Box>
        
        <Text>{basketItem.price}</Text>
        </Box>

        <Box>
         <Image src={basketItem.images[0]} alt="basketImage" height={500} width={500}/>
        </Box>

       </Box>
    
  

       })
        
      }
        
     
        
           



      </Grid>
        


     
    
    
    </>

     )

   }
  { basket<=0 &&
      (


        <>
        <Alert status='error'>
      <AlertIcon />

      <AlertDescription>Sepetinizde herhangi bir ürün yok...</AlertDescription>
      </Alert>
        
        
        </>
     )


  }

    </Box>
  )
}

export default Basket