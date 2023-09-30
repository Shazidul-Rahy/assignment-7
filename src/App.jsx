
import './App.css'
import '../src/header/Header'
import Header from '../src/header/Header'
import Blogs from './assets/blogs/Blogs'
import Cart from './assets/cart/Cart'
import Credit from './assets/cart/Credit'
import Price from './assets/cart/price'
import CartName from './assets/cart/CartName'


function App() {
  

  return (
    <>

     <Header></Header>

      <div className='flex'>

        <div className='grid grid-cols-4 gap-4'>
        <Blogs></Blogs>
        </div>
        <div className='w-80 h-max border-2 solid black rounded-lg mx-10'>
        <Cart></Cart>
        <CartName></CartName>
        <Credit></Credit>
        <Price></Price>
        </div>
        

      </div>
      
    </>
  )
}

export default App
