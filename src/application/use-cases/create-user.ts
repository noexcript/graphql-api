import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async create(username: string, email: string, password: string) {
    const user = new User(username, email, password);
    return await this.userRepository.create({ username, email, password });
  }
}
