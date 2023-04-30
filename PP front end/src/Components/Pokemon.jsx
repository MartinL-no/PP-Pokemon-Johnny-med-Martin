import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const baseUrl = "/api/pokemons";
const query = "pokemonName";

const Pokemon = ({ name, pokemonAttack }) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  
  /*
   * Johnny's Code
   */

  /* 
      const [howFuckedUpIsFuckedUp, setHowFuckedUpIsFuckedUp] = useState();

      const getAPokemon = (pokemonName) => {
      fetch(`https://localhost:7246/pokemons?pokemonName=${pokemonName}`, {
        method: "GET",
        mode: "no-cors",
      }).then((respnse) => {
        console.log(respnse);
        if (respnse.value != null) {
          setPokemon(respnse.value);
          setLoading(false);
        } else {
          setHowFuckedUpIsFuckedUp("Thats fucked up 1");
        }
      });
    };

    const pokemonAttack = () => {
      fetch(`https://localhost:7246/pokemons/attack?${query}=${name}`, {
        method: "GET",
        mode: "no-cors",
      }).then((response) => {
        console.log(response);
        if (response.value != null) {
          setMagicarp(response.value);
          setLoading(false);
        } else {
          setHowFuckedUpIsFuckedUp("Thats fucked up 2");
        }
      });
  };
*/

  const getAPokemon = () => {
    axios.get(`${baseUrl}?${query}=${name}`)
    .then(res => {
      setPokemon(res.data.value)
      setLoading(false)
  })};

  useEffect(() => {
    getAPokemon(name)
  }, [])

  if (loading) return <Loading />;

  return (
    <>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.health}</h2>
      <button onClick={() => pokemonAttack(name)}>Attack</button>
    </>
  );
};

export default Pokemon;