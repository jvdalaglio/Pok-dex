import "./Nav.css"
import {Link} from "react-router-dom"


type NavProps = {
  hasGoBack?: boolean;
}

export function Nav(props: NavProps) {
  return (
    <nav className="nav">
      <Link to="/" className="brand">Pokédex</Link>
      {props.hasGoBack && (<Link to="/" className="btn-goBack">voltar</Link>)}
    </nav>
  )
}