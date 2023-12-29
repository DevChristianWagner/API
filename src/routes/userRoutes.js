import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

// router.post('/', userController.store);
router.post('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;