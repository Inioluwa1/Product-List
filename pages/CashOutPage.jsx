import React, {useEffect, useState} from 'react'
import './CashOutPage.css'
import ChosenDeserts from '../components/chosenDesert'

export default function CashOutPage({Variousmeals, setVariousmeals, chosendeserts, setchosendeserts, confirm, setConfirm}) {

  const total = chosendeserts.reduce((acc, desert) => acc + desert.Quantity, 0)

  const GTPrice = chosendeserts.reduce((acc, desert) => acc + desert.Tprice, 0)
  
  useEffect(() => {
    const selectedDeserts = Variousmeals.filter(meal => meal.Quantity > 0)
    setchosendeserts(selectedDeserts)
    // console.log(selectedDeserts)
  }, [Variousmeals])

  const handleConfirm = () => {
    setConfirm(true)

    //scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className={`CashOutPage ${confirm? "confirm" : ""}`}>
      <h2 className='CashOutPageHeader'> Your Cart ({total}) </h2>

      {total === 0 ?        
      <div className='CashOutPageImageContainer'>
        <img src='/illustration-empty-cart.svg' alt='empty cart' />
        <p> Your added items will appear here</p>
      </div>
      : 
      <div> 
        {chosendeserts.map((meal) => (
            <ChosenDeserts 
              key={meal.id} 
              meal={meal} 
              chosendeserts={chosendeserts}
              setchosendeserts={setchosendeserts}
              setVariousmeals={setVariousmeals}
              Variousmeals={Variousmeals}
            />  
          ))}
        <div className='OrderTotal'>
          <p> Order Total </p>
          <h2> ${GTPrice.toFixed(2)} </h2>
        </div>

        <div className='CarbonNeutralDelivery'>
          <img src='/icon-carbon-neutral.svg' alt='carbon neutral delivery' />
          <p> This is a <strong>carbon-neutral</strong> delivery </p>
        </div>

        <button className='confirmOrderButton' onClick={handleConfirm}> Confirm Order </button>
      </div> }

      
    </div>
  )
}


