import "@styles/Components/CardDestaque/CardDestaque.css"
import motor from "@assets/img/motor.png"
import pistao from "@assets/img/pistao.png"
import filtros from "@assets/img/filtros.png"
import { Link } from "react-router-dom"

function CardDestaque() {
    return (
        <>
            <section>
                <h1 className="titulo-colecao">Coleções em destaque</h1>
                <div className="cards-de-ofertas">
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Motor <br /> automotivo</h2>
                            <button>
                                <Link className="button" to="/ProductList">Comprar</Link>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={motor} alt="motor carro" />
                        </div>
                    </div>
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Novos <br /> Pistões</h2>
                            <button>
                                <Link className="button" to="/ProductList">Comprar</Link>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={pistao} alt="pistao" />
                        </div>
                    </div>
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Filtros <br />resistentes</h2>
                            <button>
                                <Link className="button" to="/ProductList">Comprar</Link>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={filtros} alt="filtros" />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default CardDestaque;