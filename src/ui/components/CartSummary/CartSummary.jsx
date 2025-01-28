// eslint-disable-next-line no-unused-vars
import React from 'react';
import '@styles/components/CartSummary/CartSummary.css';

const CartSummary = () => {
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
};

export default CartSummary;
