import React from 'react'
import { useParams } from 'react-router-dom'
import {fetchProduct} from "../../Api"
import { useQuery } from 'react-query'
import { Box,Text, transition } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery';

function ProductDetail() {

  const {product_id}=useParams()
  
  console.log("id",product_id)

  const { isLoading, error, data } = useQuery(["products",product_id], () =>fetchProduct(product_id))
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  const images =data.images.map((url)=>({original:url}))
  
return (
 
  <Box marginTop="300px" >
    <Box  >
 <Box >

<Text fontSize='xl'>{data.title}</Text>

</Box>
<Box>

<Text fontSize='md'>{data.description}</Text>

</Box>

<Box>

<Text fontSize='3xl'>{data.price}TL</Text>

</Box>
</Box>
    <Box className='content'>
 
     <Box mt={10} >

     <ImageGallery items={images}  />

     </Box>
  </Box>
  </Box>
  
  
)
}
export default ProductDetail