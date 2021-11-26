import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/components/Header.css'
export const Header = () => {
  const { state } = React.useContext(AppContext)
  const { cart } = state
  return (
    <header className="Header">
      <Link to='/'>
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Heafer-chekout">
        <Link to='/checkout'>
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  )
}
