import mongoose from "mongoose";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../api/graphql/schema";
import { resolvers } from "../api/graphql/resolver";

async function startServer() {
  // Conectar ao MongoDB
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Encerrar a aplicação caso não consiga conectar ao MongoDB
  }

  // Inicializar o Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Iniciar o servidor Apollo
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
}

// Chamar a função para iniciar o servidor
startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
