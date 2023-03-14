import React from 'react'
import {Box,Button,Flex} from "@chakra-ui/react"
import { BrowserRouter ,Link, Route, Routes} from 'react-router-dom'
import AdminOrder from "../Admin/AdminOrder"
import AdminProducts from "../Admin/AdminProducts"


function Admin() {
  return (

   <Box>
    <Flex justifyContent="center" alignItems="center" mt="300" gap="10">
   <Box>
     
     <Link to="/admin/orders"><Button colorScheme="blue">Siparişler</Button></Link>
   </Box>

   <Box>
    
    <Link to="/admin/products"><Button colorScheme="orange">Ürünler</Button></Link>





  </Box>

    </Flex>


    <BrowserRouter>

      <Routes>

      <Route path='/'exact  element={<AdminOrder/>} />
      <Route path='/orders' element={<AdminOrder/>} />
      <Route path='/products' element={<AdminProducts/>} />

     </Routes>


    </BrowserRouter>




    </Box>
 

  )
}

export default Admin