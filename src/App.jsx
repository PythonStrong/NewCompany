import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Products from './Components/Products'
import Services from './Components/servic/Services'

function App() {

  return (
    <>
          <Navbar />
          <Home />
          <Services/>
          <About/>
          <Products/>
          <Blog/>
          <News/>
          <Footer/>
    </>
  )
}

export default App
