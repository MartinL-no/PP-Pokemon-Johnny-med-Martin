/*
import { useEffect, useState } from "react";
import axios from 'axios';

import Loading from "./Loading";
const baseUrl = "/api/pokemons";
const query = "pokemonName";

const Magicarp = ({ name, setIsMagikarpsTurn, opponent }) => {
  const [loading, setLoading] = useState(true);
  const [magicarp, setMagicarp] = useState();

  const getAMagicarp = () => {
    axios.get(`${baseUrl}/magikarp`)
    .then(res => {
      setMagicarp(res.data.value)
      setLoading(false)
    })
  };

  const magikarpAttack = () => {
    axios.get(`${baseUrl}/attack?attackermagikarp=${name}`)
    .then(() => {
      setIsMagikarpsTurn(res.data.value)
    })
  };

  useEffect(() => {
    getAMagicarp()
  }, [])

  if (loading) return <Loading />;
  return (
    <>
      <h1>{magicarp.Name}</h1>
      <h2>{magicarp.Health}</h2>
      <button onClick={magikarpAttack}>Be useless</button>
    </>
  );
};

export default Magicarp;
*/