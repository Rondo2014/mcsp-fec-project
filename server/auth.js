import { Jwt } from "jsonwebtoken";
import { bcrypt } from "bcrypt";

const saltRounds = 10;

export const hasPasswordMiddleware = (req, res, next) => {
  const { password } = req.body;
  if (password && password.length > 5) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(500).json({ err: "Error hashing password" });
      }
      req.body.password = hashedPassword;
      next();
    });
  } else {
    next();
  }
};

export const validateToken = (token, secretKey) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, decoded: null };
  }
};

export const validatePassword = (username, password) => {
  return bcrypt.compare(password, user.password);
};
