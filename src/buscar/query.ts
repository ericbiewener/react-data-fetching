import {
  AnyQueryKey,
  DefaultQueryConfig,
  Query,
  QueryCache,
  QueryFunction,
  QueryListener,
  QueryOptions,
  QueryState,
} from "./types";

export const createQuery = <R, K extends AnyQueryKey>(
  defaultQueryConfig: Required<DefaultQueryConfig>,
  queryCache: QueryCache,
  hash: string,
  queryKey: K,
  queryFn: QueryFunction<R, K>,
  partialConfig?: QueryOptions<R>
) => {
  const config = { enabled: true, ...defaultQueryConfig, ...partialConfig };

  const listeners: QueryListener[] = [];
  let hasFetched = false;
  let clearCacheTimeout: NodeJS.Timeout | null | undefined;
  let request: Promise<R> | null | undefined;

  const state: QueryState<R> = {
    data: undefined,
    error: undefined,
    isLoading: false,
    isFetching: false,
    dataUpdatedAt: 0,
  };

  const query: Query<R> = {
    hash,
    subscribe: (listener) => {
      listeners.push(listener);
      if (clearCacheTimeout) {
        clearTimeout(clearCacheTimeout);
        clearCacheTimeout = null;
      }

      return () => {
        const listenerIndex = listeners.indexOf(listener);
        if (listenerIndex > -1) {
          listeners.splice(listenerIndex, 1);
        }
        if (!listeners.length) {
          clearCacheTimeout = setTimeout(() => {
            queryCache.removeQueries();
          }, config.cacheTime);
        }
      };
    },
    updateConfig: (newConfig) => {
      const isNewlyEnabled = !config.enabled && newConfig.enabled;
      Object.assign(config, newConfig);
      if (isNewlyEnabled) {
        query.execute();
      }
    },
    execute: async () => {
      if (request) {
        return;
      }

      request = queryFn(...queryKey);
      state.isFetching = true;
      state.isLoading = !hasFetched;
      listeners.forEach((l) => l());

      try {
        state.data = await request;
        state.dataUpdatedAt = Date.now();
        hasFetched = true;
      } catch (e: any) {
        state.error = e;
      } finally {
        state.isFetching = false;
        state.isLoading = false;
        request = null;
        listeners.forEach((l) => l());
      }
    },
    clear: () => {
      // TODO: clear all timers, etc. Prepare for deletion
      if (clearCacheTimeout) {
        clearInterval(clearCacheTimeout);
      }
    },
    onNewInstanceMounted: () => {
      if (
        config.enabled &&
        Date.now() - state.dataUpdatedAt >= config.staleTime
      ) {
        query.execute();
      }
    },
    state,
  };

  if (config.enabled) {
    query.execute();
  }

  return query;
};
