import { Router } from 'express';

const routes = new Router();

// ROTAS
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
