import { MongoClient } from 'mongodb';

let client: MongoClient | null = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
      console.log('Connected to MongoDB');
    }
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;

// Helper function to get database instance
export async function getDB(dbName: string = process.env.DB_NAME || 'astrological') {
  const client = await connectDB();
  return client.db(dbName);
}