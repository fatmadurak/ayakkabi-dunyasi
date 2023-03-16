import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { GetAllOrders } from '../../Api'
import { useQuery } from 'react-query'


function AdminOrders() {



const {data}=useQuery("admin:orders",GetAllOrders)




  return (
  
<TableContainer display={"flex"} justifyContent={"center"} alignItems={"center"} m="20" >
  <Table variant='simple'>
    <TableCaption>Admin Siparişler Listesi</TableCaption>
    <Thead>
      <Tr>
        <Th>Address</Th>
        <Th>Kullanıcı Adı</Th>
        <Th >Satın Alınan Ürün Sayısı</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data && data.map((item) => (
        <Tr key={item.id}>
          <Td>{item.address}</Td>
          <Td>{item.userName}</Td>
          <Td>{item.basket}</Td>
        </Tr>
      ))}
    
    
    </Tbody>
  </Table>
</TableContainer>
  
  )
}

export default AdminOrders