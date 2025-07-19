import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { seed } from 'drizzle-seed';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export const db = drizzle(env.DATABASE_URL);

export async function seedDb() {
	const { article } = schema;
	await seed(db, { article });
}
