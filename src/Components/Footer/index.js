import React from "react";

import {
Grid,
Box,
Text,
GridItem,
Button,
VStack,
Divider,
IconButton,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import styles from "./styles.module.css";

function Footer() {
return (
<div className={styles.footer}>
<div className={styles.innerFooter} style={{ textAlign: "center" }}>
<Grid
width="100%"
templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
gap={6}
pt="8"
justifyContent={"space-between"}
>
<GridItem padding={"0.5rem"}>
<Box>
<Text fontSize="lg" marginBottom={"3"}>
Ayakkabı Satış
</Text>
<ul>
<li>
<a href="#">Biz Kimiz</a>
</li>
<li>
<a href="#">Vizyon & Misyon </a>
</li>
<li>
<a href="#">İş Ortaklarımız</a>
</li>
</ul>
</Box>
</GridItem>
<GridItem padding={"0.5rem"}>
        <Box>
          <Text fontSize="lg" marginBottom={"3"}>
            Sosyal Medya
          </Text>
          <VStack>
            <Button width="100%" colorScheme="facebook">
              Facebook
            </Button>
            <Button width="100%" colorScheme="twitter" href="#">
              Twitter
            </Button>
          </VStack>
        </Box>
      </GridItem>

      <GridItem padding={"0.5rem"}>
        <Box>
          <Text fontSize="lg" marginBottom={"3"}>
            İletişim
          </Text>
          <IconButton
            variant="outline"
            variantColor="#84A59D"
            color="#84A59D"
            aria-label="Send email"
            icon={<EmailIcon />}
            width="200px"
            href="#"
            marginBottom="8px"
          />
          <br />
          <IconButton
            backgroundColor="#84A59D"
            color="white"
            aria-label="Call Segun"
            icon={<PhoneIcon />}
            width="200px"
            href="#"
          />
        </Box>
      </GridItem>

      <GridItem padding={"0.5rem"}>
        <Box>
          <Text fontSize="lg" marginBottom={"3"}>
            Yardım
          </Text>
          <ul>
            <li>
              <a href="#">Güvenli Alışveriş</a>
            </li>
            <li>
              <a href="#">Nasıl İade Edebilirim</a>
            </li>
            <li>
              <a href="#">Sıkça Sorulan Sorular</a>
            </li>
          </ul>
        </Box>
      </GridItem>
    </Grid>

    <Divider mt="6" />

    <Text textAlign="center" mt="2" fontSize="16" p="20px 0">
      Copyright 2023 © Shoes | Developer by Fatma DURAK
    </Text>
  </div>
</div>
);
}

export default Footer;