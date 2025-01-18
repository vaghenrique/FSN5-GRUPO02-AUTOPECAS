import React from 'react';
import '@styles/CartItem/CartItem.css';

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src="/path-to-image/tenis-nike.png" alt="Tênis Nike Revolution 6 Next Nature Masculino" />
        <div className="item-info">
          <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
          <p>Cor: Vermelho / Branco</p>
          <p>Tamanho: 42</p>
        </div>
      </div>
      <div className="item-quantity">
        <button>-</button>
        <span>1</span>
        <button>+</button>
        <a href="#" className="remove-item">Remover item</a>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ 219,00</p>
        <p className="discounted-price">R$ 219,00</p>
      </div>
    </div>
  );
};

export default CartItem;
