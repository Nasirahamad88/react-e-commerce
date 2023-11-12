import Category from './component/Category'
import './component/Navbar/Navbar'
import Header from './component/Navbar/Navbar'
import Shop from './component/Shop/Shop'
import Hero from './component/hero'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Category/>
      <Shop/>
    </div>
  )
}

export default App
