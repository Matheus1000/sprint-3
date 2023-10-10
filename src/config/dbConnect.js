import "dotenv/config";
import mongoose from 'mongoose';

async function createNaDatabase() {
  
  mongoose.connect(process.env.DATABASE_URL);
  return mongoose.connection;
}

export default createNaDatabase;
