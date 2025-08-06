import "./MainPage.css"
import IndDesert from '../components/IndDesert.jsx'

export default function MainPage({Variousmeals,setVariousmeals, confirm}) {
  return (
    <div className={`MainPage ${confirm? "confirm" : ""} `}>
      <h1> Desserts </h1>
        <div className="MainPageContent">
        {Variousmeals.map((meal) => (
          <IndDesert
          key={meal.id}
          meal={meal}
          setVariousmeals={setVariousmeals}
          />
        ))}
        </div>
    </div> 
  )
}
