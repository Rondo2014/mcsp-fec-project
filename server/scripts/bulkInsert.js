import { faker } from "@faker-js/faker";
import fs from "fs";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "samson",
  password: "123", // Replace with your actual password
  host: "localhost",
  database: "steam_db",
  port: 5432,
});

const writableStream = fs.createWriteStream("data.csv");

await pool.query("DELETE FROM users");

for (let i = 0; i < 1_000; i++) {
  const username = faker.internet.displayName();
  const password = faker.internet.password({ length: 15 });
  const email = faker.internet.email({ firstname: username });

  writableStream.write(`${username}, ${email}, ${password} \n`);
}

writableStream.close();
await pool.end();
