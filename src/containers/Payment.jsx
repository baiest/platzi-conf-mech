import React from 'react';
import '../styles/components/Payment.css'
export const Payment = () => {
  return (
    <div className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          Boton de pago con Paypal
        </div>
      </section>
    </div>
  );
};
