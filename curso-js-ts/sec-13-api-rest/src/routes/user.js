import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', (req, res) => userController.store(req, res));

export default router;

/*
index -> lista todos -> GET
store/create -> cria um novo -> POST
show -> mostra um -> GET
update -> atualiza um -> PATCH ou PUT
delete -> deleta um -> DELETE
*/
