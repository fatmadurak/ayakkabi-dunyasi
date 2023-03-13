import React from 'react'
import { useParams } from 'react-router-dom'
import {fetchProduct} from "../../Api"
import { useQuery } from 'react-query'
import { Box,Text,Button } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery';
import { UseBasketContext } from '../../context/BasketContext'

function ProductDetail() {

  const {basket,addToBasket}=UseBasketContext();
  const {product_id}=useParams()
  
  console.log("id",product_id)

  const { isLoading, error, data } = useQuery(["products",product_id], () =>fetchProduct(product_id))
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  const images =data.images.map((url)=>({original:url}))
  const findBasket=basket.find((basketItem)=>basketItem.id===data.id)
return (
 
  <Box marginTop="220px"  width={"20%"} ml="40%" >
 
    <Box  >
 
     <Box mt={10} >

     <ImageGallery items={images}  />
      
         

     </Box>
  </Box>
  <Box   display="block" >
 <Box >

<Text fontSize='xl' mt={"5"}>{data.title}</Text>

</Box>
<Box>

<Text fontSize='md'>{data.description}</Text>

</Box>

<Box>

<Text fontSize='3xl'>{data.price}TL</Text>

</Box>
<Button colorScheme={findBasket ?"green":"purple"} variant='solid' size="lg" mt={5} onClick={()=>addToBasket(findBasket,data)} >
    
  {findBasket ?"Sepetten Çıkar":"Sepete Ekle"}

    
    </Button>
</Box>

  </Box>
  
  
)
}
export default ProductDetail