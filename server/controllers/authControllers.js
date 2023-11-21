import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../module/User.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      const missingInputs = [];
      if (!username) missingInputs.push("username");
      if (!email) missingInputs.push("email");
      if (!password) missingInputs.push("password");

      return res
        .status(400)
        .json({ error: `Missing input(s): ${missingInputs.join(", ")}` });
    }

    const foundUser = await User.findOne({ email }).exec();
    if (foundUser) {
      return res.status(400).json("User Already Exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.json({
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) {
      return res.status(401).json("Oops!User Doesn't Existed.you can signup ");
    }
    const correctPassword = await bcrypt.compare(password, foundUser.password);
    if (!correctPassword) {
      return res.status(401).json("Oops!Password Doesn't Correct ");
    }

    const token = jwt.sign(
      {id: foundUser._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      token,
      userId:foundUser._id,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const logout = async (req, res) => {
//   try {
//     const cookies = req.cookies;
//     if (!cookies?.jwt) return res.sendStatus(204); //No content
//     res.clearCookie("jwt", {
//       httpOnly: true,
//       sameSite: "None",
//       secure: true,
//     });
//     res.json({ message: "Cookie cleared" });
//   } catch (err) {
//     console.log(err);
//   }
// };
