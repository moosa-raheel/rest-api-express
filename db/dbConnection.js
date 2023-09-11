import mongoose from "mongoose";
const dbConnection = async (MONGO_URI) => {
  try {
    const options = {
      dbName: process.env.DB_NAME,
      authSource: process.env.DB_SOURCE,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
    };
    await mongoose.connect(MONGO_URI, options);
    console.log("Database connect successfully");
  } catch (error) {
    console.log(error);
  }
};
export { dbConnection };
