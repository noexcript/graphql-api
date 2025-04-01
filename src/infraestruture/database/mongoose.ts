import mongoose from "mongoose";
import { UserRepository } from "../../domain/repositories/userRepository";
import { User } from "../../domain/entities/user";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const UserModel = mongoose.model("User", userSchema);

export class MongooseUserRepository implements UserRepository {
  async create(user: any): Promise<User> {
    const userDoc = new UserModel(user);
    await userDoc.save();
    return new User(userDoc.name!, userDoc.email!, userDoc.password!);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) {
      return null;
    }

    return new User(userDoc.name!, userDoc.email!, userDoc.password!);
  }
}
