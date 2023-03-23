import React,{useState} from 'react'
import {  useQuery } from 'react-query'

import { Box,Flex,Grid,Input,Buttton } from '@chakra-ui/react'
import {FetchProductList} from "../../Api"
import  Card  from "../../Components/Card.js"
import "./index.css"


function AllProducts() {

  const [search,setSearch]=useState("")
  const [filteredData, setFilteredData] = useState([]); 
  const { isLoading, error, data } = useQuery("products",FetchProductList)
   

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const newFilter = data.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message



  
  return (
   <>

<Box mt={250} justifyContent={"center"} alignItems={"center"} textAlign="center">

<Input
        variant="filled"
        placeholder="Aramak istediğiniz ürünü yazınız.."
        _placeholder={{ opacity: 1, color: "gray.500" }}
        value={search}
        onChange={handleSearch}
        focusBorderColor="#84A59D"
        width={"60%"}
      />

</Box>


   <Box className='content'>

{
  search !==""?

  <Grid templateColumns="repeat(4,1fr)"  gap={20} mt="10" justifyContent="center" alignItems="center" >
   
  {
        filteredData &&
        filteredData.map((item,key) =>(<Card item={item} key={item.id}/>)
       )

  }
 

  </Grid>

  :
  <Grid templateColumns="repeat(4, 1fr)" mt="10" gap={6}>
  {data &&
    data.map((item, i) => (
      <Box w="100%" key={i}>
        <Card item={item} />
      </Box>
    ))}
</Grid>


}
  

   </Box>
   
   
   
   </>
  )
}

export default AllProducts