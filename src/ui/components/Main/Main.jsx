// src/ui/Components/Main/Main.jsx
import "@styles/Components/Main/Main.css";
import { Link } from "react-router-dom";
import sapatos from "@assets/img/dois_tenis_nike.png";
import gmail from "@assets/img/gmail.svg";
import facebook from "@assets/img/facebook.svg";

function Main() {
  return (
    <main className="main-login">
      <div className="formulario card-formulario">
        <div className="title">
          <h1>Acesse sua conta</h1>
          <p>Novo cliente? Então registre-se <Link to="/Registrar">aqui</Link>.</p>
        </div>
        <div className="conta">
          <h4>Login *</h4>
          <input type="text" placeholder="Insira seu login ou email" />
          <h4>Senha *</h4>
          <input type="password" placeholder="Insira sua senha" />
          <Link to="/Error">Esqueci minha senha</Link>
          <button type="button">Acessar Conta</button>
        </div>
        <div className="outrologin">
          <p>Ou faça login com</p>
          <div className="img">
            <a
              href="https://accounts.google.com/AccountChooser/signinchooser?service=merchants&continue=https%3A%2F%2Fmerchants.google.com%2Fmc%2Fproducts%2Fmethodselector%3Fa%3D719386599%26gtact%3D1&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
            <a
              href="https://www.facebook.com/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="fotoSapatos">
        <img src={sapatos} alt="Dois Tênis Nike" />
      </div>
    </main>
  );
}

export default Main;
