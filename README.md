# MovieFlix API

Uma API para gerenciamento de filmes e integração com bancos de dados modernos, utilizando TypeScript e Prisma.

## 📋 Descrição

O MovieFlix API é o backend para um sistema de gerenciamento de filmes. Ele fornece endpoints para adicionar, listar, editar e excluir informações sobre filmes, além de integrar autenticação e documentação via Swagger.

## 🚀 Tecnologias Usadas

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL** com **Prisma**
- **Swagger** para documentar a API

## ⚙️ Funcionalidades

- CRUD completo de filmes.
- Integração com banco de dados usando Prisma.
- Autenticação de usuários.
- Documentação automática com Swagger.

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/nahinMSM/movieflix.api.git
   cd movieflix.api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`:
   ```plaintext
   DATABASE_URL="sua_url_do_banco_de_dados"
   ```

4. Execute as migrações:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 📖 Documentação

Acesse a documentação interativa do Swagger em:
```
http://localhost:<porta>/swagger
```

## 📄 Licença

Este projeto está licenciado sob os termos da **MIT License**.