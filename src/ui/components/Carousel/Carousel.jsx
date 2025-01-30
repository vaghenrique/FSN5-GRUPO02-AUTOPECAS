import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@styles/Components/Carousel/Carousel.css";
import ilustracao from "@assets/img/ornament.svg";
import fire from "@assets/img/fire.png";
import bmw from "@assets/img/bmw.png";
import oleo from "@assets/img/oleo.png";
import motorv8 from "@assets/img/motorv8.png";
import rodas from "@assets/img/rodas.png";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-wrap="true" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de estoque Olimpo Peças <img src={fire} alt="fire" /></h1>
                  <p className="texto">
                  Queima de Estoque Olimpo Peças! Descontos incríveis em autopeças para todos os modelos – é a chance perfeita de equipar seu carro e economizar!
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={motorv8} className="d-block freio" alt="motorv8" />
                <img src={ilustracao} className="d-block ilustracao" alt="freio" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de estoque Olimpo Peças<img src={fire} alt="fire" /></h1>
                  <p className="texto">
                  Queima de Estoque Olimpo Peças! Descontos incríveis em autopeças para todos os modelos – é a chance perfeita de equipar seu carro e economizar!
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={bmw} className="d-block freio" alt="bmw" />
                <img src={ilustracao} className="d-block ilustracao" alt="freio" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de estoque Olimpo Peças<img src={fire} alt="fire" /></h1>
                  <p className="texto">
                  Queima de Estoque Olimpo Peças! Descontos incríveis em autopeças para todos os modelos – é a chance perfeita de equipar seu carro e economizar!
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={oleo} className="d-block freio" alt="oleo" />
                <img src={ilustracao} className="d-block ilustracao" alt="freio" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de estoque Olimpo Peças<img src={fire} alt="fire" /></h1>
                  <p className="texto">
                  Queima de Estoque Olimpo Peças! Descontos incríveis em autopeças para todos os modelos – é a chance perfeita de equipar seu carro e economizar!
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={rodas} className="d-block freio" alt="rodas" />
                <img src={ilustracao} className="d-block ilustracao" alt="freio" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;