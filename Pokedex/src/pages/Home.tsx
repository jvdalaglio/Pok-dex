import { useEffect, useState } from "react";
import { Nav } from "../components/Nav/Nav";
import { CardPokemon, CardPokemonProps } from "../components/CardPokemon/CardPokemon";
import { Loading } from "../components/Loading/Loading";
import { Title } from "../components/Title/Title";
import { api } from "../services/api";
import { List, Input } from "./Home.style";

export function Home() {

  const[isLoading, setIsLoading] = useState(true);
  const[pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
  const [textoBusca, setTextoBusca] = useState("");
 
  async function getPokemonData() {
    const {data} = await api.get("/pokemon?limit=151");

    const dadosCompletos = await Promise.all(
      data.results.map(async (result: {url: string}) => {
      const {data} = await api.get(result.url);

      return {
        id:data.id,
        name: data.name,
        types: data.types,
      };
    }));

    setPokemonList(dadosCompletos);

    setIsLoading(false);
}

  useEffect(() => {
    getPokemonData();
  }, [])

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Nav />
      <Title text="Encontre todos os pokémons em um só lugar"/>

      <Input type="text" placeholder="Buscar por NOME ou ID" value={textoBusca} onChange={(event) => 
        setTextoBusca(event.target.value)} />

      <List>
        {pokemonList
        .filter(pokemon => pokemon.name.includes(textoBusca) || String(pokemon.id) === textoBusca)
        .map((pokemon, index) => {
          return (
          <CardPokemon
          key={index} 
          id={pokemon.id} 
          name={pokemon.name} 
          types={pokemon.types}
          />
          );
          })}
      </List>
    </>
  );
}