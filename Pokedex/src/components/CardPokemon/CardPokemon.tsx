import "./CardPokemon.css";

type CardPokemonProps = {
  id: number;
  name: string;
}

export function CardPokemon(props: CardPokemonProps) {
  return (
    <a href={`/details/${props.id}`}>
      <div className="card">
        <div className="info">
            <span className="info__number">#{props.id.toString().padStart(3,"0")}</span>
            <p className="info__name">{props.name}</p>
        </div>
        <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name} />
      </div>
    </a>
  );
}