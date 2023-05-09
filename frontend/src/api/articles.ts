import { api } from './common';

import { type components, type paths } from '@types';

type ArticleList = components['schemas']['Article'][];
export type { ArticleList };

/**
 * Retrieves the list of available articles.
 *
 * @argument parameters Optional parameters
 *
 * @returns The list of articles
 */
export async function getArticles(
	parameters?: paths['/articles']['get']['parameters']
): Promise<ArticleList> {
	const response = await api.get('/articles', {
		params: parameters ?? { query: {} }
	});

	if (response.error !== undefined) {
		throw new Error(JSON.stringify(response.error));
	}

	return response.data;
}
