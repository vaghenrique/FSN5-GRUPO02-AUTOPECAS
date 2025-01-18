import "@styles/Components/Cards/Cards.css"
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Cards({ titulo, descricao, valorantigo, valoratual, foto }) {

  return (
    <>
      <Link className="link-cards" to="/ProductView">
        <div className="cards-produtos">
            <div className="fundo-card-img">
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

export default Cards


