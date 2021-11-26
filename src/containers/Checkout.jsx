import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css'
export const Checkout = () => {
  return (
    <div className="Checkout">
      <section className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="Checkout-item">
          <section className="Checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </section>
          <button type="button"><i className="fas fa-trash-alt"></i></button>
        </div>
      </section>
      <aside className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to='/checkout/information'>
        <button type="button">
          Continuar pedido
        </button>
        </Link>
      </aside>
    </div>
  );
};
