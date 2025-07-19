import { query, form } from '$app/server';
import { db } from '$lib/server/db';
import { article } from '$lib/server/db/schema';

export const getArticles = query(async () => {
	const articles = await db.query.article.findMany();

	return articles;
});

export const newArticle = form(async (data: FormData) => {
	const title = data.get('title') as string;

	await db.insert(article).values({
		title
	});

	return { success: true };
});
