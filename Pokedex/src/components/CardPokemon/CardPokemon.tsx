import "./CardPokemon.css";

type CardPokemonProps = {
  id: number;
  name: string;
}

export function CardPokemon(props: CardPokemonProps) {
  return (
    <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">{props.name}</p>
          </div>
          <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt={props.name} />
        </div>
  );
}