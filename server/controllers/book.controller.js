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
  // eslint-disable-next-line class-methods-use-this
  async getBooks() {
    this.books = await Book.find();
    if (!this.books) {
      throw new Error('There are no books!');
    }
    return this.books;
  }

  async getBook(idModel) {
    this.book = await Book.findById(idModel);
    if (!this.book) {
      throw new Error('Book not found');
    }
    return this.book;
  }
}
