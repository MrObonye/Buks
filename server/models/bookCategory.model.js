import mongoose from 'mongoose';

const { Schema } = mongoose;
const BookCategorySchema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  category: {
    allowNull: false,
    type: String,
    unique: true
  }
});
const BookCategory = mongoose.BookCategorySchema('BookCategory', BookCategorySchema);
export default BookCategory;
