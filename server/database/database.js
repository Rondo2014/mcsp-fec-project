import pkg from "pg";
const { Pool } = pkg;

export const db = new Pool({
  connectionString: `postgres://samson:samson@localhost/steam_db`,
});
