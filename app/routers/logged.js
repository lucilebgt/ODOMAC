import express from 'express';
import commentController from '../controllers/commentController.js';
import userController from '../controllers/userController.js';
import mainController from '../controllers/mainController.js';

const router = express.Router();

router.get('/golden-book', mainController.isLogged, commentController.all);
router.post('/golden-book', mainController.isLogged, commentController.add);

router.get('/disconnect', userController.disconnect);

export default router;
