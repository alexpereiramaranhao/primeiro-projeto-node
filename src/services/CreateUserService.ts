import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';

interface UserRequest {
  name: string,
  email: string,
  password: string,
}

class CreateUserService {
  public async execute({ name, email, password }: UserRequest): Promise<User> {
    const repository = getRepository(User);

    const emailUserExists = await repository.findOne({
      where: { email },
    });

    if (emailUserExists) {
      throw new Error('Email already in use');
    }

    const passwordEncrypted = await hash(password, 8);

    const user = repository.create({
      name,
      email,
      password: passwordEncrypted,
    });

    await repository.save(user);

    delete user.password;

    return user;
  }
}
export default CreateUserService;
