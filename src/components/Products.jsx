import React from 'react'
import { Product } from './Product'
import '../styles/components/Products.css'
export const Products = ({ products }) => {
  return (
    <section className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
