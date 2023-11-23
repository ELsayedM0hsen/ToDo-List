import jwt from "jsonwebtoken";
import User from "../module/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader) {
      const decode = jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decode.id);
      if (!user) return res.status(404).json("user not found");
      req.user = { id: decode.id };
      next();
    } else {
      return res.status(401).json("not found token");
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json("not found token");
  }
};
