import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();
const auth = new UserController();

router.post('/register', async (req, res, next) => {
  try {
    const doc = await auth.createUser(req, res);
    res.send(doc);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  next();
});

const userRouter = router;
export default userRouter;
