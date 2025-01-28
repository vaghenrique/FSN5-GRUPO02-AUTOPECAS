import ImageSapato from '@assets/img/image.png'
import '@styles/Components//Destaque/Destaque.css'
import { Link } from "react-router-dom";

export function Destaque() {
    return (
        <section className="topo">
            <div>
                <div className="Imagem">
                    <img src={ImageSapato} alt="" />
                </div>

                <div className="element">
                    <span className="texto1">Oferta especial</span>
                    <h1 className="titulo">Novas cores 2025</h1>
                    <p className="titulo2">Chegou a hora de renovar o estilo do seu veículo com as Novas Cores 2025 disponíveis na Olimpo Auto Peças! Nossa nova linha traz tonalidades modernas e exclusivas, perfeitas para quem deseja destacar seu carro com um toque de personalidade e sofisticação.</p>
                    <Link to="/ProductList">Ver Oferta</Link>
                </div>
            </div>

        </section>

    )
}

export default Destaque