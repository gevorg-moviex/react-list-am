import { useState } from 'react'
import './App.css'
import Header from "./components/Header/header"
import Items from './components/Items/items'
import BusinessPage from './components/Business_Pages/business'
import Products from './components/products/products'
import Delivery from './components/Delivery_Product/delivery'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Items />
      <BusinessPage />
      <Delivery  productTitle="Գնել առաքումով" />
      <Products />
      <Footer />  
    </>
  )
}

export default App
