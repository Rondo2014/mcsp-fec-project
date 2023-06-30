import { users } from "./users.js";
import http from "k6/http";

export const options = {
  discardResponseBodies: true,
  iterations: 1,
  executor: "constant-vus",
  vus: 1,
  duration: "1m",
  gracefulStop: "1m",
};

export default function () {
  // console.log(users[0].username);
  for (let i = 0; i < users.length; i++) {
    const url = "http://localhost:3000/api/register";
    const payload = JSON.stringify({
      username: `${users[i].username}`,
      email: `${users[i].email}`,
      password: `${users[i].password}`,
    });

    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    http.post(url, payload, params);
  }
}
