import { CreateUser } from "../../application/use-cases/create-user";
import { MongooseUserRepository } from "../../infraestruture/database/mongoose";

const userRepository = new MongooseUserRepository();
const createUser = new CreateUser(userRepository);
export const resolvers = {
  Query: {
    users: () => {},
  },
  Mutation: {
    createUser: async (
      _: any,
      {
        username,
        email,
        password,
      }: { username: string; email: string; password: string }
    ) => {
      const user = await createUser.create(username, email, password);
      return user;
    },
  },
};
