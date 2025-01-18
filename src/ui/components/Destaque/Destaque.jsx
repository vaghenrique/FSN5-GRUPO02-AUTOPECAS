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
                    <p className="titulo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque odio voluptatum unde minus iure odit quae, veritatis exercitationem numquam quidem hic cum iste sit nemo! Quo perspiciatis deleniti ducimus eaque.</p>
                    <Link to="/ProductList">Ver Oferta</Link>
                </div>
            </div>

        </section>

    )
}

export default Destaque