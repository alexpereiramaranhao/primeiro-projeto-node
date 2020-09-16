import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
  response.json({ message: "It's working, Alex!" });
});

export default routes;
