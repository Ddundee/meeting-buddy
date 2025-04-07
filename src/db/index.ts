import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import env from "@/env";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);

export const db = drizzle(conn, { schema });