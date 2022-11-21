import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { Nav } from "../components/Nav/Nav";
import { Container, Image, Card } from "./Details.style"
import { Badge } from "../components/Badge/Badge";
import { CardPokemonProps } from "../components/CardPokemon/CardPokemon";
import { api } from "../services/api";
import { Loading } from "../components/Loading/Loading";

export function Details() {
  const {id} = useParams();
  const[isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<CardPokemonProps>({} as CardPokemonProps);

  async function getPokemonData() {
    const {data} = await api.get(`/pokemon/${id}`);
    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
    <Nav hasGoBack={true} />
    <Container>

    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
     alt={pokemonData.name}
      />

    <Card className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}>
      <>
          <span className="info__number">#{String(id).padStart(3,"0")}</span>
          <p className="info__name">{pokemonData.name}</p>
          {pokemonData.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />
          })}
      </>
    </Card>


    </Container>

    </>
  );
}