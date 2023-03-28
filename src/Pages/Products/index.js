import React, { useState } from "react";
import { useQuery } from "react-query";
import { Box, Flex, Grid, Input } from "@chakra-ui/react";
import { FetchProductList } from "../../Api";
import Card from "../../Components/Card.js";
import "./index.css";

function AllProducts() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { isLoading, error, data } = useQuery("products", FetchProductList);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const newFilter = data.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Box
        mt={{ base: 20, md: 250 }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign="center"
      >
        <Input
          variant="filled"
          placeholder="Aramak istediğiniz ürünü yazınız.."
          _placeholder={{ opacity: 1, color: "purple.500" }}
          value={search}
          onChange={handleSearch}
          focusBorderColor="#84A59D"
          width={{ base: "80%", md: "60%" }}
        />
      </Box>

      <Box className="content" mt={{ base: 5, md: 10 }}>
        {search !== "" ? (
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={4}
            mt="10"
            justifyContent="center"
            alignItems="center"
          >
            {filteredData &&
              filteredData.map((item, key) => <Card item={item} key={item.id} />)}
          </Grid>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            mt="10"
            gap={6}
            className="grid"
          >
            {data &&
              data.map((item, i) => (
                <Box w={{ base: "100%", md: "auto" }} key={i}>
                  <Card item={item} />
                </Box>
              ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default AllProducts;