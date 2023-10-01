
import './App.css'
import '../src/header/Header'
import Header from '../src/header/Header'
import Blogs from './assets/blogs/Blogs'
import Cart from './assets/cart/Cart'
import Credit from './assets/cart/Credit'
import Price from './assets/cart/price'
import CartName from './assets/cart/CartName'
import { useState } from 'react'


function App() {

  
  
const [cartNames, setcartNames] = useState([])

const btnHandle = cartName=> {
  const addCourseName = [...cartNames, cartName];
  setcartNames(addCourseName);

}





  return (
    <>

     <Header></Header>

      <div className=' lg:flex lg:my-8'>

        <div>
        <Blogs btnHandle={btnHandle}></Blogs>
        </div>
        <div className='w-96 h-max border-2 solid black rounded-lg mx-14 mb-10 lg:mb-0 px-5 mt-10 lg:mt-0'>
        <Cart></Cart>
        <CartName cartNames={cartNames}></CartName>
        <Credit cartNames={cartNames}></Credit>
        <Price></Price>
        </div>
        

      </div>
      
    </>
  )
}

export default App
