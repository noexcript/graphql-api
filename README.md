# 📚 GraphQL API with Clean Architecture, Repository Pattern & JWT Auth

## 📌 Project Overview
This project is a **GraphQL API** built with **Node.js (TypeScript)**, **Express**, **Apollo Server**, and **Prisma ORM**. It follows **Clean Architecture** and **Repository Pattern**, and includes **JWT authentication**.

## 🚀 Features
- **User Authentication (JWT)**
- **CRUD for Authors**
- **CRUD for Books**
- **Secure Profile Access**
- **Jest Unit Tests**

---

## 📁 Project Structure

```markdown
src/
│── application/
│   ├── use-cases/
│   │   ├── CreateUser.ts
│   │   ├── AuthenticateUser.ts
│   │   ├── CreateAuthor.ts
│   │   ├── CreateBook.ts
│── domain/
│   ├── entities/
│   │   ├── User.ts
│   │   ├── Author.ts
│   │   ├── Book.ts
│── infrastructure/
│   ├── repositories/
│   │   ├── UserRepository.ts
│   │   ├── AuthorRepository.ts
│   │   ├── BookRepository.ts
│── presentation/
│   ├── resolvers/
│   │   ├── UserResolver.ts
│   │   ├── AuthResolver.ts
│   │   ├── AuthorResolver.ts
│   │   ├── BookResolver.ts
│── __tests__/
│   ├── auth.test.ts
│   ├── author.test.ts
│── server.ts
│── schema.ts
│── README.md
```

---

## 📥 Installation

```sh
git clone https://github.com/your-repo/graphql-clean-architecture.git
cd graphql-clean-architecture
npm install
```

---

## ⚙️ Configuration
Create a `.env` file:

```ini
JWT_SECRET=super_secret_key
DATABASE_URL=file:./dev.db
```

Run Prisma migrations:
```sh
npx prisma migrate dev --name init
```

---

## 🏃 Running the Server

```sh
npx ts-node src/server.ts
```

GraphQL Playground will be available at:
```
http://localhost:4000/graphql
```

---

## 🔬 Running Tests

```sh
npm test
```

---

## 📡 GraphQL API Usage

### 📌 Register a User
```graphql
mutation {
  register(name: "John Doe", email: "john@example.com", password: "password123") {
    id
    name
    email
  }
}
```

### 📌 Authenticate a User
```graphql
mutation {
  login(email: "john@example.com", password: "password123")
}
```

### 📌 Get Profile (Authenticated User)
```graphql
query {
  profile {
    id
    name
    email
  }
}
```

### 📌 Create an Author
```graphql
mutation {
  createAuthor(name: "J.K. Rowling") {
    id
    name
  }
}
```

### 📌 Get All Authors
```graphql
query {
  getAuthors {
    id
    name
  }
}
```

### 📌 Create a Book
```graphql
mutation {
  createBook(title: "Harry Potter", authorId: "author-id-here") {
    id
    title
    authorId
  }
}
```

### 📌 Get All Books
```graphql
query {
  getBooks {
    id
    title
    authorId
  }
}
```

---

## 📜 License
MIT License.

---

## 👨‍💻 Author
Your Name - [Your GitHub Profile](https://github.com/your-profile)

---

Happy Coding! 🚀

