import "@styles/Components/IconDestaque/IconDestaque.css"
import camisa from '@assets/img/blusa_destaque.svg'
import calca from '@assets/img/calca_destaque.svg'
import bone from '@assets/img/bone_destaque.svg'
import headphone from '@assets/img/fone_destaque.svg'
import tenis from '@assets/img/sapato_destaque.svg'
import { Link } from "react-router-dom";

function IconDestaque() {

  return (
    <>
      <section className="colecao-destaque-icons">
        <div className="colecao-destaque-icons-escopo">
          <div className="titulo-colecao-destaque">
            <h1>Coleções em destaque</h1>
          </div>
          <div className="cards-colecao-destaque">
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={camisa} alt="blusa"/></Link>
              <h4>Camisetas</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={calca} alt="blusa"/></Link>
              <h4>Calças</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={bone} alt="blusa"/></Link>
              <h4>Bonés</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={headphone} alt="blusa"/></Link>
              <h4>Headphones</h4>
            </div>
            <div className="bola-destaque">
              <Link to="/ProductList"><img className="color-hover" src={tenis} alt="blusa"/></Link>
              <h4>Tênis</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IconDestaque
