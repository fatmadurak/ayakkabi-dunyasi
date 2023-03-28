import React from 'react'
import {Box,Button,Flex} from "@chakra-ui/react"
import { Link, Routes,Route } from 'react-router-dom'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'
import NewProduct from './NewProduct'
import AdminProductDetail from './AdminProductDetail'

function Admin() {
  return (


<Box>
<Flex justifyContent={"center"} alignItems={"center"} mt="250" gap={5} >

 


</Flex>


<Routes>

<Route path="/orders"  element={<AdminOrders/>}/>
<Route path="/products" exact  element={<AdminProducts/>}/>
<Route path='/products/new'  element={<NewProduct/>}/>
<Route path='/products/:product_id' element={<AdminProductDetail/>}/>
</Routes>



</Box>
  )
}

export default Admin