# Projeto Front-End React com JSON-Server

Este projeto consiste em uma aplicação React que consome uma API REST simulada utilizando o `json-server`. É focado no gerenciamento de produtos eletrônicos.

## 🛠️ Estrutura do Projeto

O projeto está dividido em duas partes principais:
1.  **Front-End**: Desenvolvido em React com TypeScript e Vite.
2.  **Back-End (Mock)**: API REST simulada rodando na porta 3001.

## 🚀 Como Rodar o Projeto

### Passo 1: Configurar a API
Navegue até a pasta da API e inicie o servidor:

```
cd my-api-java-teste
npm run server

A API estará disponível em: http://localhost:3001/produtos
Passo 2: Configurar o React

Em outro terminal, na raiz do projeto front-end:

npm install
npm run dev

📂 Estrutura de Arquivos Principal

    src/pages/Produtos/index.tsx: Componente principal que lista os produtos.

    my-api-java-teste/db.json: Banco de dados NoSQL (JSON) da aplicação.

🧪 Tecnologias Utilizadas

    React / TypeScript
    Vite
    JSON-Server (API Mock)
    CSS3/TailwindCSS (Tabelas semânticas)

    ---

### 2. Exercício: Manipulação de API (GET, PUT, DELETE)

```
# 📝 Exercício Prático: Consumo de API

**Objetivo:** Implementar as funcionalidades de atualização e exclusão de produtos no componente `Produtos`.

### Parte 1: Exclusão (DELETE)
No arquivo `index.tsx`, crie uma função chamada `excluirProduto(id: number)`.
- Use o método `fetch` com o verbo `DELETE`.
- Após a exclusão bem-sucedida, atualize o estado local (`setProdutos`) para remover o item da tela sem precisar recarregar a página.

### Parte 2: Atualização de Preço (PUT)
Crie uma função para aumentar o preço de um produto em 10%.
- A função deve enviar um `PUT` para `http://localhost:3001/produtos/{id}`.
- Lembre-se de enviar o objeto completo no `body` da requisição, alterando apenas o campo `preco`.

### Parte 3: Filtro Dinâmico (GET)
Utilize os recursos do `json-server` para criar um campo de busca que filtre os produtos pelo nome conforme o usuário digita.
- Dica: Use o endpoint `http://localhost:3001/produtos?nome_like=termo`.

---

1. O botão "Excluir" na tabela deve disparar a função da Parte 1.
2. O estado deve ser manipulado de forma imutável.
3. Tratamento de erros com `try/catch` em todas as requisições.