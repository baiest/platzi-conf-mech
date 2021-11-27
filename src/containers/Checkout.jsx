import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext'
import { Helmet } from 'react-helmet';
import '../styles/components/Checkout.css'
export const Checkout = () => {
  const { state, removeFromCart} = React.useContext(AppContext)
  const { cart } = state

  const handleRemove = product => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return ( <React.Fragment>
    <div className="Checkout">
      <Helmet>
        <title>Lista de pedidos - Platzi Conf Merch</title>
      </Helmet>
      <section className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidos:' : 'Sin pedidos'}</h3>
        {cart.map(item => (
          <div className="Checkout-item">
          <section className="Checkout-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </section>
          <button type="button" onClick={() => handleRemove(item)}><i className="fas fa-trash-alt"></i></button>
        </div>
        ))}
      </section>
      {cart.length > 0 && (
        <aside className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
        <Link to='/checkout/information'>
        <button type="button">
          Continuar pedido
        </button>
        </Link>
      </aside>)}
    </div>
    </React.Fragment>
  );
};
