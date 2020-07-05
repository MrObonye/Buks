import express from 'express';
import BookController from '../controllers/book.controller';

const router = express.Router();
const books = new BookController();
router.get('/books', async (req, res, next) => {
  try {
    const doc = await books.getBooks(); 
    res.send(doc);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  next();
});

const bookRouter = router;
export default bookRouter;
