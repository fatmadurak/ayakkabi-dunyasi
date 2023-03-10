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
  MenuDivider,Image} from '@chakra-ui/react';
import {UseAuthContext} from "../../context/AuthContext"
import { getAllUsers } from '../../Api';
import { useNavigate } from 'react-router-dom';
import { UseBasketContext } from '../../context/BasketContext';
function Navbar() {

  const {loggedIn,user,logout}=UseAuthContext()

  const{basket}=UseBasketContext()
  
    
 const navigate=useNavigate()
  const logoutUser=async()=>{

    logout(()=>{

      navigate("/")

     });

  }


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
        Sepet {basket.length>=0 && <span>({basket.length})</span>}
      </Button>
      </Link>
      </li>

    { loggedIn && 
      <>

    <li><Link to={"profile"}> <Menu>
  <MenuButton as={Button} colorScheme="purple">Profile</MenuButton > <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/100/100'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
     <Link to={"/profile"}> <span>{ user.userName}</span></Link>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
      
        src=''
        mr='12px'
      />
      <span onClick={logoutUser}>Çıkış Yap</span>
    </MenuItem>
  </MenuList></Menu></Link></li>



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