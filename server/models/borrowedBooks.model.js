import mongoose from 'mongoose';

const { Schema } = mongoose;
const BorrowedBookSchema = new Schema({
  userId: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  returned: {
    type: Boolean,
    defaultValue: false
  }
});

const BorrowedBook = mongoose.BorrowedBookSchema('BorrowedBook', BorrowedBookSchema);
export default BorrowedBook;
