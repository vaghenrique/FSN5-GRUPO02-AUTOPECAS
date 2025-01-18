# Guia de Estrutura do Projeto

## Estrutura do Projeto

```plaintext
src/
|-- assets/
|   |-- favicon/
|   |-- img/
|-- ui/
|   |-- Components/
|   |   |-- CardDestaque/
|   |   |-- Cards/
|   |   |-- Carousel/
|   |   |-- CarouselMenor/
|   |   |-- Destaque/
|   |   |-- Footer/
|   |   |-- Header/
|   |   |-- HeaderMenor/
|   |   |-- IconDestaque/
|   |   |-- Main/
|   |-- pages/
|   |   |-- CartPage/
|   |   |-- ConfirmarCompraPage/
|   |   |-- CriarContaPage/
|   |   |-- CriarFormularioPage/
|   |   |-- Error404/
|   |   |-- HomePage/
|   |   |-- InformacoesPage/
|   |   |-- LoginPage/
|   |   |-- PaginaDeSucessoPage/
|   |   |-- PedidosPage/
|   |   |-- ProductListingPage/
|   |   |-- ProductViewPage/
|-- styles
|-- App.css
|-- App.jsx
|-- main.jsx
```

## Componentes

- **CardDestaque**: Exibe cartões de destaque na página principal.
- **Cards**: Exibe cartões genéricos de produtos.
- **Carousel**: Exibe um carrossel de imagens para destaque de produtos.
- **CarouselMenor**: Exibe um carrossel menor para destaque adicional.
- **Destaque**: Exibe seções de destaque no site.
- **Footer**: Componente de rodapé com informações de contato e links úteis.
- **Header**: Componente de cabeçalho com navegação principal.
- **HeaderMenor**: Variante menor do componente de cabeçalho.
- **IconDestaque**: Exibe ícones de destaque.
- **Layout**: Componente principal que envolve o conteúdo da página.

## Páginas

- **CartPage**: Página do carrinho de compras.
- **ConfirmarCompraPage**: Página de confirmação de compra.
- **CriarContaPage**: Página para criação de nova conta de usuário.
- **CriarFormularioPage**: Página para criação de formulários personalizados.
- **Error404**: Página de erro para rotas não encontradas.
- **HomePage**: Página inicial com produtos e ofertas principais.
- **InformacoesPage**: Página de informações gerais.
- **LoginPage**: Página de login para usuários.
- **PaginaDeSucessoPage**: Página pós-compra bem-sucedida.
- **PedidosPage**: Página com histórico de pedidos do usuário.
- **ProductListingPage**: Página de listagem de produtos.
- **ProductViewPage**: Página de visualização detalhada de um produto.

## Bibliotecas Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **axios**: Biblioteca para realizar requisições HTTP.
- **Alias** : Biblioteca para organizar imports.
- **Bootstrap**: Framework CSS para design responsivo e componentes pré-estilizados.
- **React Router**: Biblioteca para gerenciamento de rotas no React.

## Como Utilizar

### Iniciando o Projeto

1. **Instale as dependências**:
    ```bash
    npm install
    ```

2. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

### Utilização de Componentes

Os componentes estão localizados na pasta `src/ui/Components`. Você pode importá-los e usá-los nas suas páginas conforme necessário!

```jsx
import React from 'react';
import Header from '@components/Header/Header.jsx'
import Footer from '@components/Footer/Footer.jsx'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
```

### Utilização de Páginas

As páginas estão localizadas na pasta `src/ui/pages`. Utilize React Router para configurar as rotas do seu aplicativo.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import ProductListingPage from '@pages/ProductListingPage/ProductListingPage';
import ProductViewPage from '@pages/ProductViewPage/ProductViewPage';
import Error404 from '@pages/Error404/Error404';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products" component={ProductListingPage} />
      <Route path="/product/:id" component={ProductViewPage} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;
```

### Utilização de `axios`

Utilize `axios` para fazer requisições HTTP em seus componentes.

```jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.exemplo.com/produtos');
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
```

### Utilização de Bootstrap

Adicione estilos e componentes do Bootstrap ao seu projeto.

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => (
  <div id="carouselExample" className="carousel slide" data-ride="carousel">
    {/* Carrossel conteúdo */}
  </div>
);

export default Carousel;
```

## Conclusão

Este guia fornece uma visão geral da estrutura do projeto, descreve os componentes e páginas, e explica como utilizar bibliotecas como `axios`, Bootstrap e React Router.
```