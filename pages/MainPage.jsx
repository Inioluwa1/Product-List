import { useState, useEffect } from "react"
import "./MainPage.css"
import IndDesert from '../components/IndDesert.jsx'

export default function MainPage({Variousmeals,setVariousmeals, confirm}) {
  const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
    
  }, [])

  return (
    <div className={`MainPage ${confirm? "confirm" : ""} `}>
      <h1> Desserts </h1>
        <div className="MainPageContent">
        {Variousmeals.map((meal) => (
          <IndDesert
          key={meal.id}
          meal={meal}
          setVariousmeals={setVariousmeals}
          isMobile={isMobile}
          />
        ))}
        </div>
    </div> 
  )
}
