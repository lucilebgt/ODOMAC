import express from 'express';
import mainController from '../controllers/mainController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/login', userController.loginPage);
router.post('/login', userController.loginAction);

router.get('/signup', userController.signupPage);
router.post('/signup', userController.signupAction);

router.get('/', mainController.page);
router.get('/:path', mainController.page);


export default router;
