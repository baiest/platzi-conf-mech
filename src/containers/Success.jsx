import React from 'react';
import '../styles/components/Success.css'
export const Success = () => {
  return (
    <div className="Success">
      <section className="Success-content">
        <h2>Juan, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
      </section>
      <div className="Success-map">Google Maps</div>
    </div>
  )
};
