import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@styles/Components/CarouselMenor/CarouselMenor.css";
import farol from "@assets/img/farol.png";

function CarouselMenor() {
  return (
    <>

      <div id="carouselExampleDark" className="carousel carousel-product-view carousel-dark slide" data-bs-wrap="true" data-bs-ride="carousel">
        <div className="carousel-indicators carousel-indicators-product-view">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="cards-carousel">
            <div className="carousel-item active  primeiro" data-bs-interval="2000">
              <div className="carousel-item-row-product-view">
                <div className="imagem-ilustrativa-product-view">
                  <img src={farol} className="d-block sapato-product-view" alt="sapato" />
                </div>
              </div>
            </div>
            <div className="carousel-item segundo" data-bs-interval="2000">
              <div className="carousel-item-row-product-view">
                <div className="imagem-ilustrativa-product-view">
                  <img src={farol} className="d-block sapato-product-view" alt="sapato" />
                </div>
              </div>
            </div>
            <div className="carousel-item terceiro" data-bs-interval="2000">
              <div className="carousel-item-row-product-view">
                <div className="imagem-ilustrativa-product-view">
                  <img src={farol} className="d-block sapato-product-view" alt="sapato" />
                </div>
              </div>
            </div>
            <div className="carousel-item quarto" data-bs-interval="2000">
              <div className="carousel-item-row-product-view">
                <div className="imagem-ilustrativa-product-view">
                  <img src={farol} className="d-block sapato-product-view" alt="sapato" />
                </div>
              </div>
            </div>
            <div className="carousel-item quinto" data-bs-interval="2000">
              <div className="carousel-item-row-product-view">
                <div className="imagem-ilustrativa-product-view">
                  <img src={farol} className="d-block sapato-product-view" alt="sapato" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon carousel-control-prev-icon-product-view" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon carousel-control-next-icon-product-view" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselMenor;