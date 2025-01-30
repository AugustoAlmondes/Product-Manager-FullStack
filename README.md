# Product Manager - Full Stack



## 📌 Sobre o Projeto

**Product Manager** é um sistema Full Stack para gerenciar o cadastro de produtos. O projeto permite que os usuários adicionem, editem, visualizem e excluam produtos de forma dinâmica, utilizando tecnologias modernas do ecossistema JavaScript.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

### **Backend**

- Node.js
- Express.js
- MongoDB (com Mongoose)

### **Frontend**

- React.js (com Vite)
- React Hooks (useEffect, useState, useParams, useNavigate)
- React Router DOM

## 📂 Estrutura do Projeto

```
product-manager/
│-- backend/             # Código do servidor (Node.js, Express, MongoDB)
│   ├── index.js         # Arquivo principal do backend
│   ├── package.json     # Dependências e scripts
│
│-- frontend/            # Código da interface (React.js com Vite)
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── utils/       # Funções úteis para a aplicação
│   │   ├── App.css      # Estilização do componente principal
│   │   ├── App.jsx      # Componente principal
│   │   ├── main.jsx     # Arquivo de entrada
│   │   ├── package.json # Dependências e scripts
│
│-- README.md           # Documentação do projeto
```

## 🔧 Instalação e Execução

### 📌 Clonando o Repositório

```bash
git clone https://github.com/AugustoAlmondes/product-manager-fullstack.git
cd product-manager
```

### 📌 Configurando o Backend

```bash
cd backend
npm install
```

- Inicie o servidor:

```bash
npm start
```

### 📌 Configurando o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

O projeto estará rodando em `http://localhost:5173/`.

## 🔗 Endpoints da API

- **GET /products** → Lista todos os produtos
- **GET /products/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Obtém um produto específico
- **POST /products** → Adiciona um novo produto
- **PUT /products/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Atualiza um produto
- **DELETE /products/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Remove um produto

## 🎯 Funcionalidades

✅ Cadastro de produtos ✅ Listagem de produtos ✅ Edição de produtos ✅ Exclusão de produtos ✅ Navegação entre páginas com React Router

---

💡 Desenvolvido por **Augusto Almondes**. Todos os direitos reservados.
