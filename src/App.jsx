import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './ComponentUI'
import OrderForm from './OrderForm'
import OrderInfo from './OrderInfo'


function App() {
  return (
    <>
    <Header />
    <OrderForm />
    <OrderInfo />
    </>
  )
}

export default App
