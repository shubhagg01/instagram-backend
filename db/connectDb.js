import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connection successfull");
  } catch (err) {
    console.log(err);
    console.log("connot connect db");
  }
};
export default connectDb;
