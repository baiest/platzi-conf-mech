import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
export const Header = () => {
  return (
    <header className="Header">
      <Link to='/'>
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Heafer-chekout">
        <Link to='/checkout'>
          <i className="fas fa-shopping-basket"></i>
        </Link>
      </div>
    </header>
  )
}
