import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const service = new CreateUserService();

    const user = await service.execute({ name, email, password });

    response.json(user);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

export default userRouter;
