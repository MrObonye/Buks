import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();
const auth = new UserController();

router.post('/api/v1/auth/register',
  auth.createUser);
