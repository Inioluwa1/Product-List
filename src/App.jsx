import { useState, useEffect } from 'react'
import './App.css'
import MainPage from '../pages/MainPage.jsx'
import CashOutPage from '../pages/CashOutPage.jsx'
import ConfirmationPage from '../pages/ConfirmationPage.jsx'

function App() {
  const [Variousmeals, setVariousmeals] = useState([])
  const [chosendeserts, setchosendeserts] = useState([])
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    async function fetchMeals(){
      const response = await fetch("./data.json")
      const meals = await response.json()
      const mealswithquantity = meals.map(meal => ({
        ...meal, 
        Quantity:0,
        Tprice:0
      }))
      setVariousmeals(mealswithquantity)
      // console.log(mealswithquantity)
    }
    fetchMeals()
  }, []) 

  return (
    <div>
      <div className='App'>
        <MainPage 
          Variousmeals={Variousmeals}
          setVariousmeals={setVariousmeals}
          confirm={confirm}
          />
        <CashOutPage 
          Variousmeals={Variousmeals}
          setVariousmeals={setVariousmeals}
          chosendeserts={chosendeserts}
          setchosendeserts={setchosendeserts}
          confirm={confirm}
          setConfirm={setConfirm}
          />
      </div>
        {confirm &&
        <ConfirmationPage
          chosendeserts={chosendeserts}
          setchosendeserts={setchosendeserts}
          confirm={confirm}
          setConfirm={setConfirm}
          Variousmeals={Variousmeals}
          setVariousmeals={setVariousmeals}
        />}

    </div>
  )
}

export default App
