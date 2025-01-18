import "@styles/Components/Cards/Cards.css"
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Cards2({ titulo, descricao, valorantigo, valoratual, foto, oferta }) {

  return (
    <>
      <Link className="link-cards" to="/ProductView">
        <div className="cards-produtos">
          <div className="fundo-card-img">
            <div className="icon-oferta alinhar-oferta">
              <h1 className="texto-ofertas">{oferta}% OFF</h1>
            </div>
            <img src={foto} alt={titulo} />
          </div>
          <div className="info-card">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className="preco-produto-card">
              <h3 className="valor-antigo">$<span className="sublinhado-info">{valorantigo}</span></h3>
              <h3 className="valor-atual">${valoratual}</h3>
            </div>
          </div>

        </div>
      </Link>
    </>
  );
}

export default Cards2
