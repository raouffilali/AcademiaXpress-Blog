import { Document, Model, Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

// Define the schema for the user
const userSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, default: "" },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Define the interface for the user document
interface UserDocument extends Document {
  avatar: string;
  name: string;
  email: string;
  password: string;
  verified: boolean;
  verificationCode: string;
  admin: boolean;
  generateJWT(): string;
  comparePassword(enteredPassword: string): Promise<boolean>;
}
// hash the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
    return next();
  }
  return next();
});

// Define the methods on the schema
userSchema.methods.generateJWT = async function (): Promise<string> {
  return await sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

// compare Password

userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
  return await compare(enteredPassword, this.password);
};

// Create the User model
const User: Model<UserDocument> = model<UserDocument>("User", userSchema);

export default User;
