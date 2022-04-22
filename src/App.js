import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div className="main--container">
         <div className="main-container">
              <Navbar />
              <section className="cards-list">
                  {cards}
              </section>
         </div>
      </div>
  )
}

export default App;
