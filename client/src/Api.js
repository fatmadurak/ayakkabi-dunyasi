import axios from "axios"



const FetchProductList=async()=>{

const {data}=await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products`)

return data;
}


const CategoryTerlik=async()=>{

const data= await FetchProductList()
const terlikData= data.filter((item)=>item.category===1)

return terlikData;

}

const CategoryBot=async()=>{

    const data= await FetchProductList()
    const botData= data.filter((item)=>item.category===2)
    
    return botData;
    
    }

 const CategorySporAyakkabi=async()=>{

      const data= await FetchProductList()
      const sporAyakkabiData= data.filter((item)=>item.category===3)
        
     return sporAyakkabiData;
        
        }

        
 const ClassicAyakkabi=async()=>{

     const data= await FetchProductList()
     const ClassicAyakkabiData= data.filter((item)=>item.category===4)
              
     return ClassicAyakkabiData;
              
    }      