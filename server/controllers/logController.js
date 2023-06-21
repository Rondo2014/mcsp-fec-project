import {
  createToken,
  validateEmail,
  validatePassword,
} from "../authorization/auth.js";
import { db } from "../database/database.js";
import { emailCheck, logIn, postUser, usernameCheck } from "./queries.js";

export const logUserIn = async (req, res) => {
  try {
    // get username and password from users request
    const { username, password } = req.body;

    // if there is no username or password send an error
    if (username === "" || password === "")
      return res.status(400).json({ message: "Provide Username and Password" });

    // send information through the query
    const results = await db.query(logIn, [username]);

    // if results return no data send error
    if (results.rowCount === 0)
      return res.status(400).json({
        message: "Username or Password Invalid",
        hint: "Be Sure You Have An Account",
      });

    // validate password with bcrypt compare method
    const user = results.rows[0];
    validatePassword(user, password);

    // if no data is fetched from the database send an error
    if (results.rowCount === 0)
      return res.status(400).json({ message: "Username Or Password Invalid" });

    // create token containing user id
    const token = createToken(user);

    // send user a message when login is successful
    res.status(200).json({
      message: "Logged In Successfully",
      results: {
        id: results.rows[0].id,
        username: results.rows[0].username,
        profile_pic: results.rows[0].profile_pic,
      },
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Logging User In" });
  }
};

export const registerUser = async (req, res) => {
  try {
    // collect user data from request
    const { username, email, password } = req.body;

    // if any field is left empty return the user a message
    if (!username || !email || !password)
      return res
        .status(400)
        .json({ message: "Provide Username, Email, and Password" });

    // if email is not the correct format send user a message.
    if (!validateEmail(email))
      return res.status(200).json({ message: "Invalid Email Address" });

    // if username exists in database return message to user
    const checkForUsername = await db.query(usernameCheck, [username]);

    if (checkForUsername.rowCount !== 0)
      return res.status(226).json({ message: "Username is Taken" });

    // if email exists in database already return message to user
    const checkForEmail = await db.query(emailCheck, [email]);

    if (checkForEmail.rowCount !== 0)
      return res.status(226).json({ message: "Email Address Already In Use" });

    // send data to database
    const results = await db.query(postUser, [username, email, password]);

    // get user from database
    const user = results.rows[0];

    // create token for the user
    const token = createToken(user);

    // send user message of successful registration
    res.status(201).json({
      message: "Successfully Created An Account",
      results: results.rows[0],
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Creating Account" });
  }
};
