# Projeto Integrador - Desenvolvimento de um Site de Vendas Utilizando React 🚀  

Este projeto é um e-commerce funcional e dinâmico, desenvolvido como parte do **Projeto Integrador** do curso. O objetivo é aplicar boas práticas de desenvolvimento com React, incluindo componentização, gerenciamento de estado, roteamento e estilização responsiva.  

## 🎯 Objetivo  
Criar uma aplicação escalável e moderna que simule uma plataforma de vendas online, com páginas principais, funcionalidades básicas e extras para enriquecer a experiência do usuário.  

## 🛠️ Tecnologias Utilizadas  
- **React**  
- **Vite 6.1.1**  
- **React Router**  
- **React Context API** (ou Redux)  
- **CSS Modules** (ou outra biblioteca de estilização como Styled Components)  

---

## 📋 Requisitos e Funcionalidades Implementadas  

### Estrutura e Layout Geral  
- **Layout Responsivo e Amigável**  
- **3 Páginas Principais**:  
  - **Página Inicial**: Vitrine de produtos.  
  - **Detalhes do Produto**: Informações detalhadas de cada produto.  
  - **Carrinho de Compras**: Gerenciamento de itens adicionados.  

### Componentização e Reutilização  
- **Componentes Reutilizáveis**:  
  - Cabeçalho com navegação.  
  - Rodapé com informações do site.  
  - Cartões de produtos (na vitrine e no carrinho).  
  - Botões personalizados.  

### Gerenciamento de Estados  
- **Context API** ou Redux para estados globais:  
  - Lista de produtos no carrinho.  
  - Quantidade total de itens.  
  - Preço total do carrinho.  
- **Ações Disponíveis**:  
  - Adicionar/Remover produtos do carrinho.  
  - Alterar a quantidade de produtos no carrinho.  

### Roteamento  
- **React Router** para navegação:  
  - `/`: Página inicial.  
  - `/produto/:id`: Detalhes do produto.  
  - `/carrinho`: Carrinho de compras.  

### Funcionalidades Básicas  
1. **Exibição de Produtos**  
   - Produtos mockados com:  
     - Nome.  
     - Imagem.  
     - Descrição curta.  
     - Preço.  
     - ID único.  
2. **Detalhes do Produto**  
   - Página detalhada com:  
     - Nome, imagem grande, descrição completa e preço.  
     - Botão para adicionar ao carrinho.  
3. **Carrinho de Compras**  
   - Produtos adicionados com:  
     - Nome, quantidade, preço unitário e subtotal.  
   - Opções para alterar quantidade ou remover itens.  
   - Valor total calculado automaticamente.  

### Estilização  
- **Design Responsivo**: Compatível com dispositivos móveis e desktops.  
- **Estilo Intuitivo**: Navegação simples e clara.  

---

## 🌟 Diferenciais  
- **Filtros e Pesquisa**: Filtro por categorias e barra de pesquisa para encontrar produtos.  
- **Persistência de Dados**: Itens do carrinho salvos no localStorage.  
- **Animações**: Transições suaves e interações animadas.  

---

## ⚙️ Como Rodar o Projeto  

1. **Clone o Repositório**  
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd FSN5-GRUPO02-AUTOPECAS
   git checkout react-project