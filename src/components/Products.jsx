import React from 'react'
import { Product } from './Product'
import { AppContext } from '../context/AppContext'
import '../styles/components/Products.css'
export const Products = () => {
  const { state, addToCart } = React.useContext(AppContext)
  const { products } = state

  const handleAddToCart = product => {
    addToCart(product)
  }
  return (
    <section className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  )
}
