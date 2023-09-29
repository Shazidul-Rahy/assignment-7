
import './App.css'
import '../src/header/Header'
import Header from '../src/header/Header'
import Blogs from './assets/blogs/Blogs'
import Cart from './assets/cart/Cart'


function App() {
  

  return (
    <>

     <Header></Header>

      <div >

        <div>
        <Blogs></Blogs>
        </div>
      
      <Cart></Cart>

      </div>
      
    </>
  )
}

export default App
