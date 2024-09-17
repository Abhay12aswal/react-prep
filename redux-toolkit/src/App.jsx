import { useState } from 'react'
import './App.css'
// import Count from './components/Count'
// import { useDispatch } from 'react-redux'
import products from "../products.json";
import Product from "./components/Product";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
export default App


// function App() {

//   const dispatch = useDispatch()

//   return (
//     <div className='app'>
//       <div className='middle'>
//           <button onClick={e => dispatch({type: 'increment'})}>INcrement</button>
//           <Count/>
//           <button onClick={e=> dispatch({type: "decrement"})}>INcrement</button>
//       </div>
//     </div>
//   )
// }

// export default App
