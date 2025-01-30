import { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import farol from "@assets/img/farol.png";
import axios from "axios";
import flechaRosa from "@assets/img/flecha_icon.svg";
import { Link } from "react-router-dom";
import "@styles/pages/Cartpage/Cartpage.css";


function CartItem({ item, updateQuantity, removeItem }) {
  const price = isNaN(item.valoratual) ? 0 : parseFloat(item.valoratual);

  return (
    <div className="cart-item">
      <div className="item-details">


        <img src={farol} alt={item.titulo} />

        <div className="item-info">
          <h2>{item.titulo}</h2>
          <p>Cor: {item.cor}</p>
          <p>Tamanho: {item.tamanho}</p>
        </div>
      </div>
      <div className="item-quantity">
        <div>
          <button onClick={() => updateQuantity(item, -1)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item, 1)}>+</button>
        </div>
        <a href="#" className="remove-item" onClick={() => removeItem(item.id)}>Remover item</a>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ {item.valorantigo}</p>
        <p className="discounted-price">
          R$ {(price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}


const updateQuantity = (item, delta, cartItems, setCartItems) => {
  if (item.quantity + delta >= 1) {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + delta }
        : cartItem
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  }
};


const removeItem = (itemId, cartItems, setCartItems) => {
  const updatedItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
  setCartItems(updatedItems);
  localStorage.setItem("cart", JSON.stringify(updatedItems));
};

function CartSummary({ cartItems }) {
  const total = cartItems.reduce((acc, item) => {
    const price = isNaN(item.valoratual) ? 0 : parseFloat(item.valoratual.toString().replace(',', '.'));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cart-summary">
      <h2>RESUMO</h2>
      <div className="summary-details">
        <p>Subtotal: <span>R$ {total.toFixed(2)}</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>{total === 0 ? "R$ 0,00" : "R$ 200,00"}</span></p>
        <p>
          Total:{" "}
          <span className="total-price">
            {total === 0 ? "R$ 0,00" : `R$ ${Math.max(total - 200, 0).toFixed(2)}`}
          </span>
        </p>
        {total > 200 && (
          <p className="installments">
            ou 10x de R$ {((total - 200) / 10).toFixed(2)} sem juros
          </p>
        )}
        {total <= 200 && total !== 0 && (
          <p className="installments">Adicione mais itens para aproveitar o desconto!</p>
        )}
        {total === 0 && (
          <p className="installments">Seu carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
}


function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [character, setCharacter] = useState([]); // Definindo o estado para armazenar os produtos

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://66c77b7e732bf1b79fa6ae9a.mockapi.io/api/produtos");
        setCharacter(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log('Erro: ${error}');
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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={(item, delta) => updateQuantity(item, delta, cartItems, setCartItems)}
              removeItem={(itemId) => removeItem(itemId, cartItems, setCartItems)}
            />
          ))}
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
        <CartSummary cartItems={cartItems} />
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
                )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CartPage;