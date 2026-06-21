import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "finalproject_db",
  password: "kudo2555",
  port: 5432,
});

export default pool;