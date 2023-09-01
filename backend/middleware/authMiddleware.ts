import { verify } from "jsonwebtoken";
import User from "../models/User";

class AuthenticationError extends Error {
  statusCode: number; // Add a statusCode property

  constructor(message = "Not authorized, Token failed", statusCode = 401) {
    super(message);
    this.name = "AuthenticationError"; // Set a custom name for this error
    this.statusCode = statusCode;
  }
}

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      const authError = new AuthenticationError("Not authorized, Token failed");
      next(authError);
    }
  } else {
    const authError = new AuthenticationError("Not authorized, Token failed");
    next(authError);
  }

  // if (!req.headers.authorization) {
  //   return res.status(401).json({ message: "Authorization header required" });
  // }

  // const token = req.headers.authorization.split(" ")[1];
  // if (!token) {
  //   return res.status(401).json({ message: "Authorization token required" });
  // }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // req.user = decoded;
  // next();
};
