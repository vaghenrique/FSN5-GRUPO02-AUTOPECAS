import "@styles/Components/Footer/Footer.css";
import logo from '@assets/img/logofooter.png';
import iconFacebook from '@assets/img/iconFacebook.svg';
import iconInstagram from '@assets/img/iconInstagram.svg';
import iconTwitter from '@assets/img/iconTwitter.svg';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className="container-footer">
        <section id="contato">
          <div className="rodape">
            <div className="sobreIcones">
               <div className="sobre">
                <Link className="logo-footer" to="/"><img className="logo-olimpo" src={logo} alt="imagemlogo" /></Link>
                <p>As melhores peças automotivas para o seu veículo. Qualidade e confiança em um só lugar.</p>
              </div> 
              <div className="icones">
                <a href="https://www.facebook.com/" target="_blank"><img className="icon-img" src={iconFacebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img className="icon-img" src={iconInstagram} alt="instagram" /></a>
                <a href="https://x.com/" target="_blank"><img className="icon-img" src={iconTwitter} alt="twitter" /></a>
              </div>
            </div>
            <div className="informacao">
              <div className="informacao1">
                <h4>Informação</h4>
                <ul className="ul">
                  <li><Link to="/Error">Sobre Nós</Link></li>
                  <li><Link to="/Error">Segurança</Link></li>
                  <li><Link to="/Error">Blog</Link></li>
                  <li><Link to="/Error">Trabalhe conosco</Link></li>
                  <li><Link to="/Pedidos">Meus Pedidos</Link></li>
                </ul>
              </div>
              <div className="informacao2">
                <h4>Categorias</h4>
                <ul>
                  <li><Link to="/ProductList">Frenagem</Link></li>
                  <li><Link to="/ProductList">Filtros</Link></li>
                  <li><Link to="/ProductList">Motor</Link></li>
                  <li><Link to="/ProductList">Freio</Link></li>
                  <li><Link to="/ProductList">Acessórios</Link></li>
                </ul>
              </div>
            </div>
            <div className="contatos">
              <h3>Contato</h3>
              <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <h4>(85) 0000-0000 </h4>
            </div>
          </div>
          <hr className="barra" />
        </section>
        <footer>
          <p>&copy; 2025 Olimpo AutoPeças | Todos os Direitos Reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer