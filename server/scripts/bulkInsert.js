import { faker } from "@faker-js/faker";
import fs from "fs";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://samson:123@localhost:5432/steam_db",
});

const writableStream = fs.createWriteStream("data.csv");

await pool.query("DELETE FROM users");

for (let i = 0; i < 10_000; i++) {
  const username = faker.internet.displayName();
  const password = faker.internet.password({ length: 15 });
  const email = faker.internet.email({ firstname: username });

  writableStream.write(`${username},${email},${password}\n`);
}

writableStream.close();
await pool.end();
