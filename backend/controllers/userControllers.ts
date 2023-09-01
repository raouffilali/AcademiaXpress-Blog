import User from "../models/User";

// Custom error class for endpoint not found
class NotFoundError extends Error {
  statusCode: number; // Add a statusCode property

  constructor(message = "Endpoint not found", statusCode = 404) {
    super(message);
    this.statusCode = statusCode;
  }
}

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate input data
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    // Generate a JWT token
    const token = await newUser.generateJWT();

    // Respond with a sanitized user object (omit sensitive fields)
    const sanitizedUser = {
      _id: newUser._id,
      avatar: newUser.avatar,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      verified: newUser.verified,
      admin: newUser.admin,
    };

    // Return the sanitized user data along with the token
    return res.status(201).json({ user: sanitizedUser, token });
  } catch (error) {
    next(error);
  }
};

// login User
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required" });
    }

    // Check if the user does not exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFoundError("Email does not exist", 404);
    }

    if (await user.comparePassword(password)) {
      // Generate a JWT token
      const token = await user.generateJWT();

      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        password: user.password,
        verified: user.verified,
        admin: user.admin,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser, token });
    } else {
      throw new Error("Invalid email or Password");
    }
  } catch (error) {
    next(error);
  }
};

// get userProfile
const userProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        password: user.password,
        verified: user.verified,
        admin: user.admin,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser });
    } else {
      throw new NotFoundError("User not found", 404);
    }
  } catch (error) {
    next(error);
  }
};

// update userProfile

const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("User not found");
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.length < 6) {
      throw new Error("Password must be at least 6 characters");
    } else if (req.body.password) {
      user.password = req.body.password || user.password;
    }
    const updatedUser = await user.save();

    // Generate a JWT token
    const token = await updatedUser.generateJWT();

    // Respond with a sanitized user object (omit sensitive fields)
    const sanitizedUser = {
      _id: updatedUser._id,
      avatar: updatedUser.avatar,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
      verified: updatedUser.verified,
      admin: updatedUser.admin,
    };
    // Return the sanitized user data along with the token
    return res.status(201).json({ user: sanitizedUser, token });
  } catch (error) {
    next(error);
  }
};

// get all users function only if user is authorized
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.status(201).json(users);
    } else {
      throw new NotFoundError("Users not found", 404);
    }
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser, userProfile, updateProfile, getUsers };
