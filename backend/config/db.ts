import mongoose from "mongoose";
// import env from "../utils/validateEnv";


// Define a custom error class that extends the base Error class
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name; // Set the error name to the class name
    Error.captureStackTrace(this, this.constructor);
  }
}

// Define a custom error type that extends the custom error class
class DatabaseError extends CustomError {
  code: number; // Define the 'code' property

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions;

    await mongoose.connect(process.env.MONGO_URI!, options);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    // Use a type assertion to specify the error type
    const customError = error as CustomError;

    if (customError instanceof DatabaseError) {
      console.error("MongoDB connection FAIL");
      console.error(`Error: ${customError.message}`);
      console.error(`Error Code: ${customError.code}`);
    } else {
      console.error("An unexpected error occurred.");
      console.error(`Error: ${customError.message}`);
    }
    process.exit(1);
  }
};

export default connectDB;
