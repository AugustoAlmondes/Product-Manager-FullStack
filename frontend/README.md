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
│-- backend/            # Código do servidor (Node.js, Express, MongoDB)
│   ├── models/         # Modelos do banco de dados
│   ├── routes/         # Rotas da API
│   ├── controllers/    # Lógica de negócio
│   ├── config/         # Configurações e conexão com o banco
│   ├── server.js       # Arquivo principal do backend
│
│-- frontend/           # Código da interface (React.js com Vite)
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── pages/      # Páginas da aplicação
│   │   ├── App.jsx     # Componente principal
│   │   ├── main.jsx    # Arquivo de entrada
│
│-- README.md           # Documentação do projeto
│-- package.json        # Dependências e scripts
```

## 🔧 Instalação e Execução

### 📌 Clonando o Repositório

```bash
git clone https://github.com/AugustoAlmondes/product-manager.git
cd product-manager
```

### 📌 Configurando o Backend

```bash
cd backend
npm install
```

- Configure um arquivo `.env` com as variáveis necessárias, como a conexão com o MongoDB.
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

## 📌 Contribuição

Sinta-se à vontade para contribuir com melhorias ou sugestões! Basta abrir um **pull request** ou criar uma **issue**.

## 📜 Licença

Este projeto está sob a licença MIT.

---

💡 Desenvolvido por **Augusto Almondes**

