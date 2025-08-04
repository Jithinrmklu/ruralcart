import { useState } from 'react'
import './App.css'
import ProductListPage from './ProductListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductListPage />
    </>
  )
}

export default App
