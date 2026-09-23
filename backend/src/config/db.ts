import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import pg from "pg";

const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

/**
 * Prisma Client Singleton Instance
 * Configured with PostgreSQL driver adapter for Prisma 7
 */
const prisma = new PrismaClient({ adapter });

export default prisma;
