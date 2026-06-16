import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header.authorization;

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.json({ message: "invalid token" });
  }
}

export default auth;