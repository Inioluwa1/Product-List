import { useState, useEffect } from 'react';
import './IndDesert.css'


export default function IndDesert({meal, setVariousmeals, isMobile}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    meal.Quantity == 0 && setShow(false)
  }, [meal.Quantity])

  const showquantity = () => {
    setShow(true)
  }

  const incrementQuantity = (id) => {
    setVariousmeals(prevMeals =>
      prevMeals.map(mealitem =>
        mealitem.id === id ? 
        {...mealitem, 
          Quantity: mealitem.Quantity + 1, 
          Tprice: mealitem.Price * (mealitem.Quantity + 1)} :
        mealitem
      )
    )
  };

  const decrementQuantity = (id) => {
    setVariousmeals(prevMeals =>
      prevMeals.map(mealitem => 
        mealitem.id === id?
        {...mealitem, 
          Quantity: mealitem.Quantity > 0? mealitem.Quantity - 1 : 0, 
          Tprice: mealitem.Price * (mealitem.Quantity > 0? mealitem.Quantity - 1 : 0)} :
        mealitem
      )
    ) 
  } 


  return (
    <div className='IndDesertContainer'>
      <div className='IndDesertImageContainer'>
        <img src={isMobile? meal.MobileImage: meal.DesktopImage} alt={meal.Name} className={` IndDesertImage ${meal.Quantity> 0 ? 'giveBorder' : ''}`} />
        {!show? 
        <div className='IndDesertCart' onClick={showquantity}>
          <img src='/icon-add-to-cart.svg' alt='Add to Cart' />
          <p> Add to Cart </p>
        </div> :
        <div className='IndDesertQuantity'>
          <p className='decrease' onClick={()=> decrementQuantity(meal.id)}> - </p>  
          <p className='quantity'> {meal.Quantity} </p>
          <p className='increase' onClick={()=> incrementQuantity(meal.id)}> + </p>
        </div>}
      </div>
      <div className='Info' onClick={() => setShow(false)}>
        <p className='Name'> {meal.Name} </p>
        <p className='Details'> {meal.Description} </p>
        <p className='Price'> ${meal.Price} </p>
      </div>
    </div>
  )
}
