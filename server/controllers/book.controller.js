import Book from '../models/book.model';

export default class BookController {
  /**
  * Fetch all books present in database
  *
  * @public
  *
  * @method
  *
  * @param  {Object}    req - express http request object
  * @param  {Object}    res - express http response object
  * @param  {Function} next - calls th enect middleware in the stack
  *
  * @return {Object}        - express http response object
  */
  async getBooks(req, res, next) {
    this.book = await Book.findall()
      .then(() => res.status(200).send({ books: this.book }))
      .catch((error) => next(error));
  }
}
