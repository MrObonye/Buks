import mongoose from 'mongoose';

const uri = '';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnection = mongoose.connection;
export default dbConnection;
