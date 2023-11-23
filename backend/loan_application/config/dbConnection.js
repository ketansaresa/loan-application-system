import mongoose from "mongoose";

export default async function connectDatabase() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successful !!`);

  // Return the mongoose connection object
  return mongoose.connection;
}
