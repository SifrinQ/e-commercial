import { useState } from 'react'
import './style/App.css'
import Navigation from './Navigation'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import products from '../data/products'

function App() {
  const [currentTab, setCurrentTab] = useState('about')

  const renderTab = () => {
    if (currentTab === 'products') {
      return <Products products={products} />
    }

    if (currentTab === 'contact') {
      return <Contact />
    }

    return <About onTabChange={setCurrentTab}/>
  }

  return (
    <div className="wrapper">
      <Navigation onTabChange={setCurrentTab} />
      <main className="main-content">
        {renderTab()}
      </main>
      <Footer />
    </div>
  )
}

export default App
