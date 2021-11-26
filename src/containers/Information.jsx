import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css'
export const Information = () => {
  const { state, addToBuyer } = React.useContext(AppContext)
  const form = React.useRef(null)

  const { cart } = state
  const navigate = useNavigate()

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city':formData.get('city') ,
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')
    }
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }
  return (
    <div className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h2>Informació de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
            </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </section>
      <aside className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div key={item.title} className="Information-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        ))}
      </aside>
    </div>
  );
};
