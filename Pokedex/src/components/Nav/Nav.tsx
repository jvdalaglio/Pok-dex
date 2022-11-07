import "./Nav.css"

type NavProps = {
  hasGoBack?: boolean;
}

export function Nav(props: NavProps) {
  return (
    <nav className="nav">
      <a href="#" className="brand">Pokédex</a>
      {props.hasGoBack && (<a href="#" className="btn-goBack">voltar</a>)}
    </nav>
  )
}