import { useState } from "react";
import axios from "axios";

import Pokemon from "./Pokemon";
import Toast from "./Toast";
const baseUrl = "/api/pokemons";

function Fight({ playerName, opponentName, setIsGameOver }) {
  const [isMagikarpsTurn, setIsMagikarpsTurn] = useState(true)
  const [toastClassName, setToastClassName] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const pokemonAttack = async (attacker) => {
    const attacked = attacker == playerName ? opponentName : playerName
    const { move, strength } = await getAttackDetails(attacker, attacked)
    const isPokemonDead = await getIsPokemonDead(attacked)

    if (!isPokemonDead) {
      setIsMagikarpsTurn(prevState => !prevState)
      showToast(attacker, attacked, move, strength)
    }
    else {
      setIsGameOver(true)
    }
  }

  const getAttackDetails = async (attacker, attacked) => {
    return axios.get(`${baseUrl}/attack?attacker=${attacker}&opponent=${attacked}`)
      .then(res => res.data)
  }

  const getIsPokemonDead = async (attacked) => await axios.get(`${baseUrl}?pokemonName=${attacked}`)
      .then(res => {
        const health = res.data.value.health
        return (health == 0)
      })

  const showToast = (attacker, attacked, move, strength) => {
    setToastMessage(`${attacker} attacked ${attacked} with ${move} taking ${strength} off his health`)
    setToastClassName("show")
  }

  return (
    <>
      {isMagikarpsTurn && 
        <Pokemon
          name={playerName}
          pokemonAttack={pokemonAttack}
          setIsGameOver={setIsGameOver}
        />}

      {!isMagikarpsTurn &&
        <Pokemon
          name={opponentName}
          pokemonAttack={pokemonAttack}
          setIsGameOver={setIsGameOver}
        />}

      {<Toast className={toastClassName} message={toastMessage} />}
    </>
  )
}

export default Fight