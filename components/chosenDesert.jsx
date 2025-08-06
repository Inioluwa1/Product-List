import React, { useEffect } from 'react'
import './chosenDesert.css'
import { IoCloseCircleOutline } from "react-icons/io5";

export default function chosenDesert({meal, setchosendeserts, chosendeserts, Variousmeals,  setVariousmeals}) {
  
  // const Tprice = (meal.Price * meal.Quantity).toFixed(2);

  const handleDelete = (id) => {
    const updatedchosenDeserts = chosendeserts.filter(indmeal => indmeal.id !== id)
    setchosendeserts(updatedchosenDeserts)
    const updatedMeals = Variousmeals.map(meal => 
      meal.id === id ? {...meal, Quantity: 0} : meal
    ) 
    setVariousmeals(updatedMeals)
  }

  return (
    <div>
      <div className='ChosenDesert'>
        <div className='indChosenDesert'> 
          <p className='ChosenDesertName'> {meal.Name} </p>
          <div className='indChosenDesertDetails'>
            <p className='ChosenDesertQuantity'> {meal.Quantity}x </p>
            <p className='ChosenDesertPrice'> @ ${meal.Price} </p>
            <p className='ChosenDesertTPrice'> ${meal.Tprice} </p>
          </div>
        </div>
        <IoCloseCircleOutline size={30} className='closeIcon' onClick={() => handleDelete(meal.id)}/>
      </div>
    </div>
  )
}
