
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

  
  
const [hours, setHours] = useState([])
const btnHandle = hour => {
  const remainingHours = [...hours, hour];
  setHours(remainingHours);
}

  return (
    <>

     <Header></Header>

      <div className=' lg:flex lg:my-8'>

        <div>
        <Blogs btnHandle={btnHandle}></Blogs>
        </div>
        <div className='w-96 h-max border-2 solid black rounded-lg mx-14 mb-10 lg:mb-0 px-5 mt-10 lg:mt-0'>
        <Cart hours={hours}></Cart>
        <CartName hours={hours}></CartName>
        <Credit hours={hours}></Credit>
        <Price></Price>
        </div>
        

      </div>
      
    </>
  )
}

export default App
