import {Link} from "react-router-dom"
import { Badge } from "../Badge/Badge";
import {Card} from "./CardPokemon.style"

type PokemonTypeProps = {
  type: {
    name: string ;
  }
}

export type CardPokemonProps = {
  id: number;
  name: string;
  types: PokemonTypeProps[];
}

export function CardPokemon(props: CardPokemonProps) {
  return (
    <Link to={`/details/${props.id}`}>
      <Card className={`type--${props.types[0].type.name.toLowerCase()}`}>
        <>
          <span className="info__number">#{props.id.toString().padStart(3,"0")}</span>
          <p className="info__name">{props.name}</p>
          {props.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />
          })}
        </>
        <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name} />
      </Card>
    </Link>
  );
}