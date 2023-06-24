import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { promisify } from "util";

const saltRounds = 10;

// When a login route is created, use this middleware on that route
export const hasPasswordMiddleware = (req, res, next) => {
  // get password from request body
  const { password } = req.body;
  // optional password length check
  if (password && password.length > 5) {
    // hash password using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(500).json({ err: "Error hashing password" });
      }
      // set password to hashed password
      req.body.password = hash;
      //continue with the post request
      next();
    });
  } else {
    return res.status(400).json({ message: "Incorrect Username Or Password" });
  }
};

// creates a token containing the users id and a unique signature
export const createToken = (username) => {
  const token = jwt.sign({ id: username.id }, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  return token;
};

// esnures user has a valid token
export const validateToken = async (token, secretKey) => {
  try {
    // verify token using jwt
    const decoded = await promisify(jwt.verify)(token, secretKey);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, decoded: null };
  }
};

// decodes header token and returns an obj containing the users id
export const headerDecoder = (header) => {
  const token = header.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
  return decoded;
};

// ensures user provided correct password
export const validatePassword = (username, password) => {
  // compares password to hashed password using bcrypt
  return bcrypt.compare(username.password, password);
};

// unsures user provided valid email structure
export function validateEmail(email) {
  // Check if the email contains a "."
  if (!email.includes(".")) {
    return false;
  }

  // Check if email constains the @ symbol
  if (!email.includes("@")) return false;

  // Split the email into two parts at the @ symbol
  var parts = email.split("@");
  var localPart = parts[0];
  var domainPart = parts[1];

  // Check if the local part and domain part are not empty
  if (localPart.length === 0 || domainPart.length === 0) {
    return false;
  }

  return true;
}

// ensures user is signed in with a valid token
export const protectRoutes = async (req, res, next) => {
  try {
    let token;
    // ensure authorization header is correct
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // gets token from header
      token = req.headers.authorization.split(" ")[1];
    }
    // if token isn't present send user a message
    if (!token)
      return res
        .status(401)
        .json({ message: "Must be signed in to use this feature" });

    // decode token and get user id from it
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.SECRET_ACCESS_TOKEN
    );

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error While Verifying Token",
      expiredAt: error?.expiredAt,
    });
  }
};
