import { command, query } from '$app/server';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema';

// export const addArticle = command(async () => {
// 	console.log('hi');
// 	const { article } = schema;
// 	await seed(db, { article });
// });

export const getArticles = query(async () => {
	const articles = await db.query.article.findMany();

	return articles;
});
