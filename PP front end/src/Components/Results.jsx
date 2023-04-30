import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const baseUrl = "/api/pokemons";
const query = "pokemonName";

const Results = ({ playerName, opponentName, setIsGameOver }) => {
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState();
  const [runnerUp, setRunnerUp] = useState();

  const getResults = async () => {
    let pokemons = [];

    pokemons[0] = await axios.get(`${baseUrl}?${query}=${playerName}`)
      .then(res => res.data.value)
    pokemons[1] = await axios.get(`${baseUrl}?${query}=${opponentName}`)
      .then(res => res.data.value)

      setWinner(pokemons.sort()[1])
      setRunnerUp(pokemons.sort()[0])
      setLoading(false)
  };

  useEffect(() => {
    getResults()
  }, [])

  const handleReset = () => {
    axios.get(`${baseUrl}/reset`)
    setIsGameOver(false)
  };

  if (loading) return <Loading />;

  return (
    <>
      <h1>{winner.name} beat {runnerUp.name}</h1>
      <h2>Won with {winner.health} remaining</h2>

      <button onClick={handleReset}>Reset Game</button>
    </>
  )
};

export default Results;