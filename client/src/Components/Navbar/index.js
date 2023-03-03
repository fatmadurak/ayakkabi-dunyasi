import React from 'react'
import Styles from './Styles.module.css';
import logo from "../../assets/Logo.jpg"
import { Link } from 'react-router-dom';
import { Button,Box,Text } from '@chakra-ui/react';


function Navbar() {
  return (
    <nav className={Styles.nav}>

    <Box className={Styles.container}>
       
     <div className={Styles.left}>

      <div className={Styles.logo}>
        
        <img src={logo} alt="logo"  width={200}/>

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
        <Link><Text  fontSize='md'>Kategoriler</Text></Link>
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

     <li><Link to={"/signin"}><Button colorScheme='purple'> Giriş Yap</Button></Link></li>
     <li><Link to={"/signup"}><Button colorScheme='purple'>Kayıt Ol</Button></Link></li>
     </ul>
     
     
 
    </div>


    </Box>






    </nav>
  )
}

export default Navbar