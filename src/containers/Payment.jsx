import React from 'react';
import {AppContext} from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css'
import { useNavigate } from 'react-router-dom';
export const Payment = () => {
  const { state, addNewOrder} = React.useContext(AppContext)
  const { cart, buyer } = state 
  const navigate = useNavigate()
  const paypalOptions = {
    clientId: '',
    intent: 'capture',
    clientId: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart = {() => console.log('Start Payment')}
            onPaymentSuccess = {data => handlePaymentSuccess(data)}
            onPaymentError = {error => console.log(error)}
            onPaymentCancel = {data => console.log(data)}
          />
        </div>
      </section>
    </div>
  );
};
