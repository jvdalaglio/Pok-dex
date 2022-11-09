import { Nav } from "../components/Nav/Nav";
import "./Home.css";
import { CardPokemon } from "../components/CardPokemon/CardPokemon";
import pokemonList from "../assets/pokemon.json"

export function Home() {
  const { pokemons } = pokemonList;
  return (
    <>
      <Nav />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        {pokemons.map((pokemon, index) => {
          return <CardPokemon key={index} id={pokemon.id} name={pokemon.name}/>
          })} 
      </div>
    </>
  );
}