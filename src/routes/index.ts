import { Router } from 'express';

import appointments from './appointments.routes';

const routes = Router();

routes.use(appointments);

routes.get('/', (request, response) => {
  response.json({ message: "It's working, Alex!" });
});

export default routes;
