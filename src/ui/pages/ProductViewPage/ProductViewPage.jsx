import Layout from "@components/Layout/Layout";
import "@styles/pages/ProductViewPage/ProductViewPage.css";
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import CarouselMenor from "@components/CarouselMenor/CarouselMenor";
import farol from "@assets/img/farol.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductViewPage() {
  const [character, setCharacter] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Para manter o estado dos itens no carrinho
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://66c77b7e732bf1b79fa6ae9a.mockapi.io/api/produtos");
        setCharacter(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log(`Erro: ${error}`);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
  
    setProduct({
      id: 1,
      titulo: "Jaguar Cars Volvo C70",
      descricao: "Farol | VolvoC70 | REF:38416711",
      valorantigo: "919.00",
      valoratual: 719.90,
      foto: farol,
    });
  }, []); 

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = savedCart.find(
      (item) =>
        item.id === product.id &&
        item.cor === product.cor &&
        item.tamanho === product.tamanho
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      savedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(savedCart); 
    localStorage.setItem("cart", JSON.stringify(savedCart)); 
    
    alert(`Produto "${product.titulo}" adicionado ao carrinho!`);
  };


  if (!product) {
    return <div>Carregando produto...</div>;
  }

  return (
    <Layout>
      <div className="corpo-product-view">
        <p>
          Home / Categorias / Acessórios / Faróis de veículos / Jaguar Cars Volvo C70
        </p>
        <div className="product">
          <div className="carousel-cards-tenis">
            <div>
              <CarouselMenor />
            </div>

            <div className="galery">
              <div className="galery1">
                <img src={product.foto} alt="Imagem do produto" />
              </div>
              <div className="galery2">
                <img src={product.foto} alt="Imagem do produto" />
              </div>
              <div className="galery3">
                <img src={product.foto} alt="Imagem do produto" />
              </div>
              <div className="galery4">
                <img src={product.foto} alt="Imagem do produto" />
              </div>
              <div className="galery5">
                <img src={product.foto} alt="Imagem do produto" />
              </div>
            </div>
          </div>

          <div className="buyBox">
            <h3>{product.titulo}</h3>
            <p className="referencia-do-produto">{product.descricao}</p>
            <p>
              R$ <span id="preco">{product.valoratual}</span> <span id="riscado">{product.valorantigo}</span>
            </p>
            <h6>Descrição do produto</h6>
            <p>
              Um design moderno com detalhes em neon azul suave ao redor das lentes principais. 
              As lentes possuem um formato arredondado com acabamento interno em preto brilhante, o que realça seu aspecto sofisticado. 
              A carcaça é elegante e compacta, combinando bem com veículos premium, como os da marca Jaguar. 
              A presença de refletores embutidos e componentes para luz alta e baixa sugere alta eficiência.
            </p>
            <button className="botaoCompraProductView" onClick={() => addToCart(product)}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <section className="produtos_relacionados">
        <h5>Produtos relacionados</h5>
        <div className="produto-em-alta-cards">
          {Array.isArray(character) && character.slice(0, 4).map((card) => (
            card.desconto === true ? (
              <Cards2
                key={card.id}
                oferta={card.valordesconto}
                foto={farol}
                titulo={card.titulo}
                descricao={card.descricao}
                valorantigo={card.valorantigo}
                valoratual={card.valoratual}
              />
            ) : (
              <Cards
                key={card.id}
                foto={farol}
                titulo={card.titulo}
                descricao={card.descricao}
                valorantigo={card.valorantigo}
                valoratual={card.valoratual}
              />
            )
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ProductViewPage;
