import { query, form } from '$app/server';
import { db } from '$lib/server/db';
import { article } from '$lib/server/db/schema';
import { type } from 'arktype';
import { eq } from 'drizzle-orm';

export const getArticles = query(async () => {
	const articles = await db.query.article.findMany();

	return articles;
});

const newArticleSchema = type({
	title: 'string',
	author: 'string'
});

export const newArticle = form(newArticleSchema, async (data) => {
	const { title, author } = data;

	await db.insert(article).values({
		title,
		author
	});

	return { success: true };
});

const updateArticleSchema = type({
	id: 'number',
	title: 'string'
});

export const updateArticle = form(updateArticleSchema, async (data) => {
	const { title, id } = data;

	console.log(id);

	await db
		.update(article)
		.set({
			title
		})
		.where(eq(article.id, id));
});
