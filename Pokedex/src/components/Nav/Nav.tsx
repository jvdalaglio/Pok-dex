import {Link} from "react-router-dom"
import {BtnGoBack, NavBar, TotalPokemons} from "./Nav.style"
import { useSelector, useDispatch } from "react-redux"
import { StoreState } from "../../redux";


type NavProps = {
  hasGoBack?: boolean;
}

export function Nav(props: NavProps) {
  const totalPokemon = useSelector((state: StoreState) => state.favorite);

  return (
    <NavBar className="nav">
      <Link to="/" className="brand">Pokédex</Link>
      <div>  
      <TotalPokemons>Total de favoritos: {totalPokemon.length} </TotalPokemons>
      {props.hasGoBack && (<BtnGoBack to="/">voltar</BtnGoBack>)}
      </div>
    </NavBar>
  )
}