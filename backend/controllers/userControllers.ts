import User from "../models/User";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email does not exist");
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

export { registerUser, loginUser };
