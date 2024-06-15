import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "ASAAN",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:', err);
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    console.error('Error stack:', err.stack);
    console.error('Error reason:', err.reason);
    });
};