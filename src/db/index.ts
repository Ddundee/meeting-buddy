import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
async function main() {
    const client = postgres(env.DATABASE_URL)
    const db = drizzle({ client });
}
main();
