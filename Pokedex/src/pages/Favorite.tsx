import { Nav } from "../components/Nav/Nav";
import { useState, useEffect } from "react"
import { Title } from "../components/Title/Title";
import { useSelector } from "react-redux"
import { StoreState } from "../redux";
import { CardPokemon, CardPokemonProps } from "../components/CardPokemon/CardPokemon";
import { api } from "../services/api";
import { Loading } from "../components/Loading/Loading";
import { List } from "./Favorite.style"

export function Favorite() {
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ListaFavoritos = useSelector(
    (state: StoreState) => state.favorite
  );

  async function getPokemonData() {
    const dadosCompletos = await Promise.all(
      ListaFavoritos.map(async(idPokemon) => {
        const { data } = await api.get("pokemon/" + idPokemon)

        return{
          id: data.id,
          name: data.name,
          types: data.types,
        };
      })
    );

    setPokemonList(dadosCompletos);
    setIsLoading(false);
  }

  
  useEffect(() => {
    getPokemonData()
  }, [])
  
  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
    <Nav />
    <Title text="Seus pokémons favoritos" />
    <List>
    {pokemonList
    .map((pokemon, index) => {
      return(
        <CardPokemon
        key={index}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
        />
        )
      })}
      </List>
    </>
    )
}