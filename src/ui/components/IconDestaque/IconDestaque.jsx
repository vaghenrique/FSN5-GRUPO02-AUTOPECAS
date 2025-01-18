import "@styles/Components/IconDestaque/IconDestaque.css"
import car from '@assets/img/car.svg'
import moto from '@assets/img/moto.svg'
import acess from '@assets/img/acess.svg'
import bateria from '@assets/img/bateria.svg'
import user from '@assets/img/user.svg'
import { Link } from "react-router-dom";

function IconDestaque() {

  return (
    <>
      <section className="colecao-destaque-icons">
        <div className="colecao-destaque-icons-escopo">
          <div className="titulo-colecao-destaque">
            <h1>Menu em destaque</h1>
          </div>
          <div className="cards-colecao-destaque">
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={car} alt="carro"/></Link>
              <h4>Carros</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={moto} alt="moto"/></Link>
              <h4>Motos</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={acess} alt="acessorio"/></Link>
              <h4>Acessórios</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={bateria} alt="bateria"/></Link>
              <h4>Baterias</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/Login"><img className="color-hover" src={user} alt="perfil"/></Link>
              <h4>Perfil</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IconDestaque
