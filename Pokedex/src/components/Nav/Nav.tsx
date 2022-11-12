import "./Nav.css"
import {Link} from "react-router-dom"
import {BtnGoBack, NavBar} from "./Nav.style"


type NavProps = {
  hasGoBack?: boolean;
}

export function Nav(props: NavProps) {
  return (
    <NavBar className="nav">
      <Link to="/" className="brand">Pokédex</Link>
      {props.hasGoBack && (<BtnGoBack to="/">voltar</BtnGoBack>)}
    </NavBar>
  )
}