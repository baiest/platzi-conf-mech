import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Routes exact path="/" component={Home} />
        <Routes exact path="/checkout" component={Checkout} />
        <Routes exact path="/checkout/information" component={Information} />
        <Routes exact path="/checkout/payment" component={Payment} />
        <Routes exact path="/checkout/success" component={Success} />
        <Routes component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}