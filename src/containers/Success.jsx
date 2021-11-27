import React from 'react';
import { Map } from '../components/Map'
import { AppContext } from '../context/AppContext';
import '../styles/components/Success.css'
import { useGoogleAddress } from '../hooks/useGoogleAddress';
export const Success = () => {
  const { state } = React.useContext(AppContext)
  const { buyer } = state
  // const location = useGoogleAddress(buyer[0].address)
  const location = {
    lat: 99.45445, lng: -78.656464
  }
  return (
    <div className="Success">
      <section className="Success-content">
        <h2>Juan, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
      </section>
      <div className="Success-map">
        <Map
          data={location}
        />
      </div>
    </div>
  )
};
