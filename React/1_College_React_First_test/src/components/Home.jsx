import Saman from "./Saman"
import React,{useState,useEffect} from "react"
const Home = () => {
  const [Product, setProduct] = useState([])
  useEffect(() => {
      const getData = async() =>{
        const res =await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProduct(data.products)
      }
      getData();
    }, [])
  return (
    <div className='home'>
        {Product.map((product)=>(
          <Saman key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Home