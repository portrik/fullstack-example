import { useCallback, useEffect, useState } from 'react';

/**
 * Wrapper for asynchronous functions for easier usage as a hook.
 */
interface UseAsyncHook<Result> {
	/**
	 * Is the function being executed?
	 */
	loading: boolean;

	/**
	 * Output of the asynchronous function.
	 *
	 * Is set to Error if any errors are raised during the execution.
	 */
	result?: Error | Result;

	/**
	 * Trigger the execution of the asynchronous function.
	 */
	execute: () => void;
}
export type { UseAsyncHook };

/**
 * Hook wrapper around an asynchronous function.
 *
 * The function is executed immediately after mounting unless specified otherwise by `preventImmediate`.
 *
 * @param wrappedFunction Asynchronous function to be wrapped
 * @param preventImmediate Prevent the immediate execution of the function
 *
 * @returns UseAsyncHook object
 */
export function useAsyncHook<Result>(
	wrappedFunction: () => Promise<Result>,
	preventImmediate = false
): UseAsyncHook<Result> {
	const [loading, setLoading] = useState<UseAsyncHook<Result>['loading']>(true);
	const [result, setResult] = useState<UseAsyncHook<Result>['result']>();

	/**
	 * Trigger for the asynchronous function.
	 *
	 * The function is synchronous to prevent any issues arising from an async function being called in synchronous
	 * contexts.
	 */
	const execute = useCallback(() => {
		setLoading(true);
		// eslint-disable-next-line unicorn/no-useless-undefined
		setResult(undefined);

		wrappedFunction()
			.then((result) => {
				setResult(result);
			})
			.catch((error) => {
				setResult(error as Error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [wrappedFunction]);

	useEffect(() => {
		if (preventImmediate) {
			return;
		}

		execute();
	}, []);

	return { loading: loading, result: result, execute: execute };
}
