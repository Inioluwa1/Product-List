import React from 'react'
import './confirmedOrder.css'

export default function confirmedOrder({desert}) {
  return (
    <div className='confirmOrder'>
      <img src={desert.DesktopImage} alt={desert.Name} className='confirmOrderImage' />
      <div className='confirmOrderDetails'>
        <p className='confirmOrderName'> {desert.Name} </p>
        <div className='confirmOrderPriceDetails'>
          <p className='confirmOrderQuantity'> {desert.Quantity}x </p>
          <p className='confirmOrderPrice'> @ ${(desert.Price)}</p>
        </div>
      </div>
      <p className='confirmOrderTPrice'> ${(desert.Tprice).toFixed(2)} </p>
    </div>
  )
}
