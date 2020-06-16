import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: { type: String, required: true },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  isAdmin: {
    type: Boolean,
    defaultValue: false
  },
  membershipType: {
    allowNull: false,
    type: String,
    Enum: ['bronze', 'silver', 'gold'],
    defaultValue: 'bronze',
    required: true
  },
  passwordResetToken: {
    type: String
  },
  authId: {
    type: String
  }
});
const User = mongoose.model('User', UserSchema);
export default User;
