import { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import sapatoAzul from "@assets/img/sapato_card.png";
import axios from "axios";
import flechaRosa from "@assets/img/flecha_icon.svg";
import { Link } from "react-router-dom";
import "@styles/pages/Cartpage/Cartpage.css";

function CartItem() {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={sapatoAzul} alt="Tênis Nike Revolution 6 Next Nature Masculino" />
        <div className="item-info">
          <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
          <p>Cor: Vermelho / Branco</p>
          <p>Tamanho: 42</p>
        </div>
      </div>
      <div className="item-quantity">
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <a href="#" className="remove-item">Remover item</a>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ 219,00</p>
        <p className="discounted-price">R$ 219,00</p>
      </div>
    </div>
  );
}

function CartSummary() {
  return (
    <div className="cart-summary">
      <h2>RESUMO</h2>
      <div className="summary-details">
        <p>Subtotal: <span>R$ 219,00</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>R$ 30,00</span></p>
        <p>Total: <span className="total-price">R$ 219,00</span></p>
        <p className="installments">ou 10x de R$ 21,00 sem juros</p>
        <button className="continue-button">Continuar</button>
      </div>
    </div>
  );
}

function CartPage() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://66c77b7e732bf1b79fa6ae9a.mockapi.io/api/produtos");
        setCharacter(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log(`o erro foi ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-content">
          <div className="cart-header">
            <h2>MEU CARRINHO</h2>
            <h2>QUANTIDADE</h2>
            <h2>UNITÁRIO</h2>
            <h2>TOTAL</h2>
          </div>
          <CartItem />
          <section className="discount-shipping">
            <div className="discount">
              <strong>Calcular desconto</strong>
              <input type="text" placeholder="Insira seu Cupom" />
              <button>OK</button>
            </div>
            <div className="shipping">
              <strong>Calcular Frete</strong>
              <input type="text" placeholder="Insira seu CEP" />
              <button>OK</button>
            </div>
          </section>
        </div>
        <CartSummary />
      </div>
      <section className="container-produtos-em-alta">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos Relacionados</h1>
            <h2>
              <Link to="/ProductList" className="link-ver-todos">
                Ver todos <img src={flechaRosa} alt="flecha" />
              </Link>
            </h2>
          </div>
          <div className="produto-em-alta-cards">
            {Array.isArray(character) &&
              character
                .slice(0, 4)
                .map((card) =>
                  card.desconto === true ? (
                    <Cards2
                      key={card.id}
                      oferta={card.valordesconto}
                      foto={sapatoAzul}
                      titulo={card.titulo}
                      descricao={card.descricao}
                      valorantigo={card.valorantigo}
                      valoratual={card.valoratual}
                    />
                  ) : (
                    <Cards
                      key={card.id}
                      foto={sapatoAzul}
                      titulo={card.titulo}
                      descricao={card.descricao}
                      valorantigo={card.valorantigo}
                      valoratual={card.valoratual}
                    />
                  )
                )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CartPage;
