import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { Container, Image, Card, Button, Label, Value } from "./Details.style"
import { Nav } from "../components/Nav/Nav";
import { Badge } from "../components/Badge/Badge";
import { CardPokemonProps } from "../components/CardPokemon/CardPokemon";
import { Loading } from "../components/Loading/Loading";
import { add, remove } from "../redux/favoriteSlice";
import { api } from "../services/api";
import { StoreState } from "../redux";

type DetailsProps = CardPokemonProps & {
  heigth: number,
  weight: number;
}

export function Details() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const ListaFavoritos = useSelector((state: StoreState) => state.favorite);
  const[isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<DetailsProps>({} as DetailsProps);

  function handleClickAdd() {
    dispatch(add(id));
  }

  function handleClickRemove() {
    dispatch(remove(id));
  }

  async function getPokemonData() {
    const {data} = await api.get(`/pokemon/${id}`);
    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
      heigth: data.height/10,
      weight: data.weight/10,
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
          <Label>Peso</Label>
          <Value>{pokemonData.weight}kg</Value>
          <Label>Tamanho</Label>
          <Value>{pokemonData.heigth}m</Value>
          {ListaFavoritos.find(pokemon => Number(pokemon) === Number(id)) ? 
          (<Button onClick={handleClickRemove}>Remover dos favoritos</Button>) : 
          (<Button onClick={handleClickAdd}>Adicionar aos favoritos</Button>)
          }
      </>
    </Card>


    </Container>

    </>
  );
}