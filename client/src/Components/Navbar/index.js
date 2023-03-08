import React from 'react'
import Styles from './Styles.module.css';
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import { Button,Box,Text,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider } from '@chakra-ui/react';
import {UseAuthContext} from "../../context/AuthContext"

function Navbar() {

  const {loggedIn}=UseAuthContext()
  return (
    <nav className={Styles.nav}>

    <Box className={Styles.container}>
       
     <div className={Styles.left}>

      <div className={Styles.logo}>
        
      <Link to={"/"}> <img src={logo} alt="logo"  width={120}/></Link>

      </div>

      <div >
        
        <ul className={Styles.menu}>
         
        <li>
          <Link to={"/"}><Text  fontSize='md'>Anasayfa</Text></Link>
        </li>
       
        <li>
          <Link to={"/products"}><Text  fontSize='md'>Ürünler</Text></Link>
        </li>

        <li>
        <Menu >
     <MenuButton as={Button} style={{background:"goldenrod"}}>
      Kategori
     </MenuButton>
    <MenuList>
    <Link to={"products/terlik"}><MenuItem>Terlik</MenuItem></Link>
    <Link to={"products/sporAyakkabi"}> <MenuItem>Spor Ayakkabı</MenuItem></Link>
    <Link to={"products/bot"}> <MenuItem>Bot</MenuItem></Link>
    <Link to={"products/klasikAyakkabi"}><MenuItem>Klasik Ayakkabı</MenuItem></Link>
    </MenuList>
   </Menu>
        </li>
   
        </ul>


      </div>
  

     </div>

    <div className='right'>

    


     <ul className={Styles.menu}>
      <li><Link to={"/iletisim"}><Text  fontSize='md'>İletişim</Text></Link></li>
      <li>
      <Link to={"/basket"}> 
      <Button colorScheme='yellow'variant='outline' ><span className="material-symbols-outlined">
        shopping_basket
       </span>
        Sepet
      </Button>
      </Link>
      </li>

    { loggedIn && 
      <>
    <li><Link to={"profile"}><Button colorScheme='purple'> Profile</Button></Link></li>

     </>
  
   


    }


    {

     !loggedIn && 
     <>
    <li><Link to={"signin"}><Button colorScheme='purple'> Giriş Yap</Button></Link></li>
    <li><Link to={"signup"}><Button colorScheme='purple'>Kayıt Ol</Button></Link></li>
   </>
    }



   
     </ul>
     
     
 
    </div>


    </Box>






    </nav>
  )
}

export default Navbar