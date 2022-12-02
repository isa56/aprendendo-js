import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', (req, res) => userController.index(req, res));
router.get('/:id', (req, res) => userController.show(req, res));
router.post('/', (req, res) => userController.store(req, res));
router.put('/:id', loginRequired, (req, res) => userController.update(req, res));
router.delete('/:id', loginRequired, (req, res) => userController.delete(req, res));

export default router;

/*
index -> lista todos -> GET
store/create -> cria um novo -> POST
show -> mostra um -> GET
update -> atualiza um -> PATCH ou PUT
delete -> deleta um -> DELETE
*/
