import { type UseAsyncHook, useAsyncHook } from './common';

import { type ArticleList, getArticles } from '@api';

/**
 * Asynchronous hook for retrieving the list of articles.
 *
 * @see `@api/getArticles`
 */
export function useGetArticles(): UseAsyncHook<ArticleList> {
	return useAsyncHook(getArticles);
}
