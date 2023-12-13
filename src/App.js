import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

// V declaration V
const App = () => {
  const [board, setBoard] = useState([
    "❌",
    "🔪",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
// console.log("board:", board);
// V New function must be done before return V
const handleClick = (id) => {
  alert(id)
}


  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App



