import { useState } from "react"
import "./App.css";

import Fight from "./Components/Fight"
import Results from "./Components/Results"

function App() {
  const [isGameOver, setIsGameOver] = useState(false)
  const playerName = "Magikarp"
  const opponentName = "Pikachu"

  return (
    <main>
      {!isGameOver &&
        <Fight
          playerName={playerName}
          opponentName={opponentName}
          setIsGameOver={setIsGameOver} 
        />}
      
      {isGameOver &&
        <Results
          playerName={playerName}
          opponentName={opponentName}
          setIsGameOver={setIsGameOver}
        />}
    </main>
  );
}

export default App