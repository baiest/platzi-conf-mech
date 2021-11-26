import React from 'react'
export const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title}/>
      <section className="Product-item-info">
        <h3>{product.title} <span>$ {product.price}</span></h3>
        <p>{product.description}</p>
      </section>
      <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
    </div>
  )
}
