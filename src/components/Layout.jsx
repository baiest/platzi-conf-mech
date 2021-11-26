import React, { Children } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import '../styles/components/Layout.css'

export const Layout = ({ children }) => {
  return (
    <main className="Main">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
