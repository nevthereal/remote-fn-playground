import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const article = sqliteTable('article', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	author: text('author')
});
