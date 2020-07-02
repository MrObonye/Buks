import mongoose from 'mongoose';

const { Schema } = mongoose;
const NotificationSchema = new Schema({
  type: {
    allowNull: false,
    type: String
  },
  bookTitle: {
    allowNull: false,
    type: String,
    ref: 'Book'
  },
  email: {
    allowNull: false,
    type: String
  }
});
const Notification = mongoose.notificationSchema('Notification', NotificationSchema);
export default Notification;
