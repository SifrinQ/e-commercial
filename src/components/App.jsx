import { useState } from 'react'
import './style/App.css'
import Logo from './Logo'
import Navigation from './Navigation'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import item_placeholder from '../assets/item-placeholder.png'

function App() {
  const [currentTab, setCurrentTab] = useState('about')
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image: item_placeholder
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
      image: item_placeholder
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 39.99,
      image: item_placeholder
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 49.99,
      image: item_placeholder
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 59.99,
      image: item_placeholder
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 69.99,
      image: item_placeholder
    }
  ]

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
      <Logo />
      <Navigation onTabChange={setCurrentTab} />
      {renderTab()}
    </div>
  )
}

export default App
