import { useEffect, useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { CardPokemon, CardPokemonProps } from "../components/CardPokemon/CardPokemon";
import "./Home.css";
import { api } from "../services/api";

export function Home() {

  const[isLoading, setIsLoading] = useState(true);
  const[pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
 
  async function getPokemonData() {
    const {data} = await api.get("/pokemon?limit=1");

    const dadosCompletos = await Promise.all(
      data.results.map(async (result: {url: string}) => {
      const {data} = await api.get(result.url);


      return {
        id:data.id,
        name: data.name,
        types: data.types,
      };
    }));

    // setPokemonList();

    setIsLoading(false);
}

  useEffect(() => {
    getPokemonData();
  }, [])

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Nav />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        {pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
          return (
          <CardPokemon
          key={index} 
          id={pokemon.id} 
          name={pokemon.name} 
          types={pokemon.types} 
          />
          );
          })}
      </div>
    </>
  );
}