import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { Nav } from "../components/Nav/Nav";
import PokemonList from "../assets/pokemon.json"

export function Details() {
  const {id} = useParams();
  const {pokemons} = PokemonList;
 
  return (
    <>
    <Nav hasGoBack={true} />

    <h1>{pokemons.find((pokemon) =>  String(pokemon.id) === id)?.name}</h1>
    </>
  );
}