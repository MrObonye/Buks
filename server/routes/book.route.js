import express from 'express';
import BookController from '../controllers/book.controller';
import validateLimitAndOffset from '../middleware/validateLimitAndOffset';

const router = express.Router();
router.get('/books', validateLimitAndOffset, BookController.getBooks);

const bookRouter = router;
export default bookRouter;
