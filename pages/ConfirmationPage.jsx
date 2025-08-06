import React from 'react'
import './ConfirmationPage.css'
import ConfirmedOrder from '../components/confirmedOrder.jsx'

export default function ConfirmationPage({chosendeserts, setConfirm, setchosendeserts, Variousmeals, setVariousmeals}) {
  const totalPrice = chosendeserts.reduce((total, desert) => total + desert.Tprice, 0).toFixed(2);

  const handlerestart = () => {
    setConfirm(false)

    // Reset chosendeserts to default state
    const defaultchosendeserts = chosendeserts.map(meal => ({
      ...meal, Quantity: 0, Tprice: 0
  }))
    setchosendeserts(defaultchosendeserts)
    
    // Reset Variousmeals to default state
    const defaultdeserts = Variousmeals.map(meal => ({
      ...meal, Quantity: 0, Tprice: 0
  }))
    setVariousmeals(defaultdeserts)

  }

  return (
    <div className='confirmationPage'>
      <img src='/icon-order-confirmed.svg' alt='order confirmation' />
      <h1> Order Confirmed </h1>
      <p className='quote'> We hope you enjoy your food!</p>
      <div className='confirmedOrderList'>
        {chosendeserts.map((desert) => (
          <ConfirmedOrder 
            key = {desert.id}
            desert = {desert} /> 
        ))}

        <div className='confirmationPageTotal'> 
          <p> Order Total </p>
          <p className='confirmationPageTotalPrice'> ${totalPrice} </p>
        </div>
      </div>
        <button className='confimationPageButton' onClick={handlerestart}> Start New Order </button>
    </div>
  )
}
 