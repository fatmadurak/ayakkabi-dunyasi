import React from 'react'
import {Box,Button,Flex} from "@chakra-ui/react"
import { Link, Routes,Route } from 'react-router-dom'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'

function Admin() {
  return (


<Box>
<Flex justifyContent={"center"} alignItems={"center"} mt="250" gap={5} >

  <Box><Link to="/admin/orders"><Button colorScheme="orange">Siparişler</Button></Link></Box>
  <Box><Link to="/admin/products"><Button colorScheme="blue">Ürünler</Button></Link></Box>


</Flex>


<Routes>

<Route path="/orders"  element={<AdminOrders/>}/>
<Route path="/products" exact  element={<AdminProducts/>}/>

</Routes>



</Box>
  )
}

export default Admin