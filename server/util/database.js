import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/buksDB';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnection = mongoose.connection;
export default dbConnection;
