import { Nav } from "../components/Nav/Nav";
import "./Home.css";
import { CardPokemon } from "../components/CardPokemon/CardPokemon";

export function Home() {
  return (
    <>
      <Nav />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        <CardPokemon />
      </div>
    </>
  );
}