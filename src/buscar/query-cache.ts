import { createQuery } from "./query";
import { serializeQueryKey } from "./serialize-query-key";
import {
  AnyQueryKey,
  DefaultQueryConfig,
  Queries,
  Query,
  QueryCache,
  QueryFunction,
  QueryOptions,
} from "./types";

const defaultConfig: Required<DefaultQueryConfig> = {
  cacheTime: 300000,
  staleTime: 60000,
};

export const makeQueryCache = (
  defaultQueryConfig?: DefaultQueryConfig
): QueryCache => {
  const queries: Queries = {};

  const fullConfig = { ...defaultConfig, defaultQueryConfig };

  const createAndCacheQuery = <R, K extends AnyQueryKey>(
    ...args: [
      queryCache: QueryCache,
      hash: string,
      queryKey: K,
      queryFn: QueryFunction<R, K>,
      partialConfig?: QueryOptions<R>
    ]
  ) => {
    const query = createQuery<R, K>(fullConfig, ...args);
    queries[query.hash] = query;
    return query;
  };

  const cache: QueryCache = {
    getQuery: <R>(key: AnyQueryKey) => {
      const [hash] = serializeQueryKey(key);
      return queries[hash] as Query<R> | undefined;
    },

    getQueryData: <R>(...key: AnyQueryKey) =>
      cache.getQuery<R>(key)?.state.data,

    getOrCreateQuery: <R, K extends AnyQueryKey>(
      queryKey: K,
      queryFn: QueryFunction<R, K>,
      config?: QueryOptions<R>
    ) => {
      const [hash] = serializeQueryKey(queryKey);
      const query = queries[hash] as Query<R> | undefined;
      if (query) {
        if (config) {
          query.updateConfig(config);
        }
        return query;
      }

      return createAndCacheQuery<R, K>(cache, hash, queryKey, queryFn, config);
    },

    removeQueries: (key?: AnyQueryKey) => {
      const hash = key ? serializeQueryKey(key)[0] : null;
      Object.entries(queries).forEach(([k, query]) => {
        if (hash && query.hash !== hash) {
          return;
        }
        query.clear();
        delete queries[k];
      });
    },

    createQuery: createAndCacheQuery,

    invalidateQueries: () => {},
    setQueryData: () => {},
    cancelQueries: () => {},
    clear: () => {},
    getQueries: () => {},
    isFetching: false,
  };

  return cache;
};
