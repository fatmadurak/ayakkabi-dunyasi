import React from 'react'
import { useParams } from 'react-router-dom'
import {FetchProduct} from "../../Api"
import { useQuery } from 'react-query'
import { Box,Text } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery';

function ProductDetail() {

  const {product_id}=useParams()
  const { isLoading, error, data } = useQuery(["products",product_id], () =>FetchProduct(product_id))

  
  if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message


  const images=data.images.map((url)=>({original:url} ))

  return (
   <Box className='content' style={{marginTop:"500px"}}>



       <ImageGallery items={images}/>

       </Box>


  )
}

export default ProductDetail