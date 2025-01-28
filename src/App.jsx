<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======

import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "@pages/HomePage/HomePage";  // Corrigido para usar o alias configurado
import ProductList from "@pages/ProductListingPage/ProductListingPage"
import ProductView from "@pages/ProductViewPage/ProductViewPage"
import CartPage from "@pages/CartPage/CartPage"
import ConfirmarCompra from "@pages/ConfirmarCompraPage/ConfirmarCompraPage"
import SucessoPage from "@pages/SucessoPage/SucessoPage"
import LoginPage from "@pages/LoginPage/LoginPage"
import CriarContaPage from "@pages/CriarContaPage/CriarContaPage"
import CriarFormulario from "@pages/CriarFormularioPage/CriarFormularioPage"
import PedidosPage from "@pages/PedidosPage/PedidosPage"
import Informacoes from "@pages/InformacoesPage/InformacoesPage"
import Error from "@pages/Error404/Error404"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ProductList/" element={<ProductList />} />
        <Route path="ProductView/" element={<ProductView />} />
        <Route path="Cart/" element={<CartPage />} />
        <Route path="ConfirmarCompra/" element={<ConfirmarCompra />} />
        <Route path="Sucesso/" element={<SucessoPage />} />
        <Route path="Login/" element={<LoginPage />} />
        <Route path="Registrar/" element={<CriarContaPage/>} />
        <Route path="CriarFormulario/" element={<CriarFormulario />} />
        <Route path="Pedidos/" element={<PedidosPage />} />
        <Route path="Informacoes/" element={<Informacoes />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> teste-react
