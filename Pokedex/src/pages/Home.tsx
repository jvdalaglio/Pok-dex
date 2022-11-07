import { Nav } from "../components/Nav/Nav";
import "./Home.css";

export function Home() {
  return (
    <>
      <Nav />
      <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

      <div className="list">
        <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">Bulbasaur</p>
          </div>
          <img className="card__img" src="/src/assets/1.png" alt="" />
        </div>
        <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">Bulbasaur</p>
          </div>
          <img className="card__img" src="/src/assets/1.png" alt="" />
        </div>
        <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">Bulbasaur</p>
          </div>
          <img className="card__img" src="/src/assets/1.png" alt="" />
        </div>
        <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">Bulbasaur</p>
          </div>
          <img className="card__img" src="/src/assets/1.png" alt="" />
        </div>
        <div className="card">
          <div className="info">
            <span className="info__number">#001</span>
            <p className="info__name">Bulbasaur</p>
          </div>
          <img className="card__img" src="/src/assets/1.png" alt="" />
        </div>
      </div>
    </>
  );
}