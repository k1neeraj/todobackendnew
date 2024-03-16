import mongoose from "mongoose";

export const Database = async () => {
  try {
    const Db = await mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Db is connected");
  } catch (error) {
    console.log("Error in the Connecting the Database ", error);
  }
};
