import { createToken, validatePassword } from "../auth.js";
import { db } from "../database/database.js";
import { logIn, postUser } from "./queries.js";

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
    // if no information is fetched from the database send an error
    if (results.rowCount === 0)
      return res.status(400).json({ message: "Username Or Password Invalid" });

    const token = createToken(user);

    console.log(token);

    res
      .status(200)
      .json({ message: "Logged In Successfully", results: results.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Logging User In" });
  }
};

export const registerUser = async (req, res) => {
  try {
    // collect info from request
    const { username, email, password } = req.body;
    console.log(password);
    if (!username || !email || !password)
      return res
        .status(400)
        .json({ message: "Provide Username, Email, and Password" });
    const results = await db.query(postUser, [username, email, password]);

    res.status(201).json({
      message: "Successfully Created An Account",
      results: results.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Creating Account" });
  }
};
