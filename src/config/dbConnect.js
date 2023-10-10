import "dotenv/config";
import mongoose from 'mongoose';

async function createNaDatabase() {
  mongoose.connect("mongodb+srv://every-banco:projeto-final@cluster0.0pjinat.mongodb.net/every_banco?retryWrites=true&w=majority")
  return mongoose.connection;
}

export default createNaDatabase;
