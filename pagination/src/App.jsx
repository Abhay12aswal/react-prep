import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [products , setproducts] = useState([]);
  const [page ,setpage] =useState(1 );

  const fetchProducts = async ()=>{
    const res= await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if(data && data.products){
      setproducts(data.products);
    }

  }

  useEffect(()=>{
    fetchProducts();
  },[])

  const selectPageHandler = (selectedpage)=>{
    setpage(selectedpage)
  }

  return (
    <div>
    {
      products.length>0 && <div className='products'>
        {
          products.slice(page*10-10,page*10).map((prod)=>{
            return <span className='products__single' key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title}></img>
              <span>{prod.title}</span>
            </span>
          })
        }
      </div>
    }
    {
        products.length>0 && <div className='pagination'>
          <span>⬅️</span>
          {
            [...Array(products.length/10)].map((_,i)=>{
              return <span onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
            })
          }
          <span>➡️</span>
        </div>
    }
    </div>
  )
}

export default App
