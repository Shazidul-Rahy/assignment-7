
import './App.css'
import '../src/header/Header'
import Header from '../src/header/Header'
import Blogs from './assets/blogs/Blogs'

function App() {
  

  return (
    <>

    <Header></Header>
    <div className="w-2/3 grid grid-rows-3 grid-flow-col gap-4">
      <Blogs></Blogs>
      </div>
      
    </>
  )
}

export default App
