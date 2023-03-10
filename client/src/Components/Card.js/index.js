import React from 'react'
import { Box,Text,Image,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "../../../src/App.css"
import { UseBasketContext } from '../../context/BasketContext'

function Card({item}) {

const{items}=UseBasketContext();
const findItem= items.find((itemBasket)=>itemBasket.id===item.id)
 

  return (
    <>
    
    <Box p="5px" overflow="hidden" borderRadius="xl" borderWidth="1px"  className='imageCard'>
    
    <Link to={`/products/${item.id}`}> 
    <Image  src={item.images[0]} alt='CardImage'  width={250} height={290} border="xl" />
    </Link>
   
    <Box>

     <Box>

     <Text fontSize='xl'>{item.title}</Text>

     </Box>
     <Box>

    <Text fontSize='md'>{item.description}</Text>

     </Box>

     <Box>

    <Text fontSize='3xl'>{item.price}TL</Text>

    </Box>
    </Box>

     
    <Button colorScheme='purple' variant='solid' mt={5} >
       Sepete Ekle
    </Button>
 

    </Box>
    
    
    
    </>
  )
}

export default Card