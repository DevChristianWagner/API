import { Router } from 'express';
import pictureController from '../controllers/PictureController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, pictureController.index);

export default router;
