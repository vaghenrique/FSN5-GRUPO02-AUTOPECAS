# **Olimpo Peças - E-commerce de Autopeças**  

**Descrição:**  
Olimpo Peças é uma aplicação de e-commerce fictícia desenvolvida em **React**, com foco na venda de autopeças. O projeto foi criado com uma arquitetura organizada, boa componentização e integração com uma API simulada para listagem de produtos.  

---

## 🛠️ Estrutura de Branches

A organização do projeto segue um fluxo de branches que facilita a colaboração e a integração contínua:

- **`dev-sally`**: Branch de desenvolvimento da Sally.
- **`dev-gabriel`**: Branch de desenvolvimento do Gabriel.
- **`dev-caio`**: Branch de desenvolvimento do Caio.
- **`dev-edro`**: Branch de desenvolvimento do Pedro.
- **`dev-nicolas`**: Branch de desenvolvimento do Nicolas.
- **`test-react`**: Branch destinada à integração e testes de funcionalidades das branches individuais.
- **`projeto-react`**: Branch principal onde o código final, validado, é consolidado.

---

## 🔄 Fluxo de Trabalho

1. Cada desenvolvedor trabalha em sua branch individual de desenvolvimento.
2. Ao finalizar uma funcionalidade ou correção, a branch individual é mergeada na branch `test-react`.
3. A branch `test-react` é utilizada para realizar testes integrados, garantindo que todas as funcionalidades coexistam corretamente.
4. Após a validação na branch `test-react`, é feito merging na branch `projeto-react`.

---


## **Funcionalidades Principais:**  
- **HomePage:** Exibe uma vitrine dinâmica com produtos, destacando ofertas especiais.  
- **Lista de Produtos:** Apresenta todos os produtos cadastrados com detalhes.  
- **Detalhes do Produto:** Informações completas de um produto selecionado.  
- **Carrinho:** Permite adicionar, remover e ajustar quantidades de produtos.  
- **Navegação Dinâmica:** Implementada com **React Router**.  
- **Persistência de Dados:** Carrinho salvo com **localStorage**.  
- **Responsividade:** Layout adaptável para dispositivos móveis e desktops.  

---

## **Tecnologias Utilizadas:**  
- **React:** Biblioteca para construção da interface do usuário.  
- **Axios:** Requisições HTTP à MockAPI.  
- **Bootstrap:** Estilização responsiva.  
- **Vite:** Ferramenta para desenvolvimento e build.  

---

## **Instalação e Execução**  

### **Pré-requisitos**  
Certifique-se de ter instalado:  
- **Node.js** (versão recomendada: 16 ou superior)  
- **Git**  

### **Passos para Instalar:**  

1. Clone o repositório:  
```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse o diretório do projeto:  
```bash
cd fsn5-grupo02-autopecas
```

3. Instale as dependências do projeto:  
```bash
npm install
```

4. Execute a aplicação no modo de desenvolvimento:  
```bash
npm run dev
```

5. Para compilar a aplicação para produção:  
```bash
npm run build
```

---

## **Comandos Git Utilizados**  
- `git clone`: Clonar o repositório.  
- `git status`: Verificar status dos arquivos.  
- `git add .`: Adicionar todas as modificações ao staging.  
- `git commit -m "mensagem do commit"`: Criar um commit com uma mensagem descritiva.  
- `git pull`: Atualizar o repositório local com as mudanças remotas.  
- `git push`: Enviar as mudanças locais para o repositório remoto.  
- `git merge <branch>`: Mesclar branches.

---

## **Configuração do Vite**
Para criar e configurar o projeto com **Vite**, utilize os comandos:  
```bash
npm create vite@latest .
```
Selecione o framework **React** durante a configuração.

---

## Estrutura do Projeto

```plaintext
src/
|-- assets/
|   |-- favicon/
|   |-- img/
|-- styles/
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
|-- App.css
|-- App.jsx
|-- main.jsx
```

---

## **Contribuições**  
Para contribuir com melhorias, sinta-se à vontade para abrir Pull Requests.

---

**Equipe FSN5-GRUPO02:**  
Sally | Gabriel | Caio | Pedro | Nicolas  
Sempre em busca de inovação e excelência. 🚗✨
