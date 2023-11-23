import User from "../module/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").lean();
    if (!users.length) {
      return res.status(400).json({ message: "No users found" });
    }
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
