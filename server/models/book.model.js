import mongoose from 'mongoose';

const { Schema } = mongoose;
const BookSchema = new Schema({
  title: {
    allowNull: false,
    type: String,
    unique: true
  },
  authors: {
    allowNull: false,
    type: String
  },
  description: {
    type: String
  },
  total: {
    type: Number,
    defaultValue: 0
  },
  cover: {
    type: String
  },
  bookFile: {
    type: String
  },
  categoryId: {
    type: String
  },
  read: {
    type: Boolean,
    default: false
  }
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
