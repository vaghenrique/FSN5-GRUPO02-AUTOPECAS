/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Layout from '@components/Layout/Layout.jsx';
import Carousel from "@components/Carousel/Carousel.jsx";
import Cards from "@components/Cards/Cards.jsx";
import Cards2 from "@components/Cards/Cards2.jsx";
import IconDestaque from "@components/IconDestaque/IconDestaque.jsx";
import sapatoAzul from "@assets/img/sapato_card.png";
import flechaRosa from "@assets/img/flecha_icon.svg";
import CardDestaque from "@components/CardDestaque/CardDestaque.jsx";
import "@styles/pages/HomePage/HomePage.css";
import { Link } from "react-router-dom";
import { Destaque } from "@components/Destaque/Destaque.jsx";
import axios from "axios";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66c77b7e732bf1b79fa6ae9a.mockapi.io/api/produtos"
        );
        setCharacter(response.data);
        console.log("API response:", response.data);
        setLoading(false);
      } catch (error) {
        console.log(`o erro foi ${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Carousel />
      <CardDestaque />
      <IconDestaque />
      <section className="container-produtos-em-alta">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos em alta</h1>
            <h2>
              <Link to="/ProductList" className="link-ver-todos">
                Ver todos <img src={flechaRosa} alt="flecha" />
              </Link>
            </h2>
          </div>
          <div className="produto-em-alta-cards">
            {Array.isArray(character) &&
              character
                .slice(0, 8)
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
      <Destaque />
    </Layout>
  );
};

export default Home;
