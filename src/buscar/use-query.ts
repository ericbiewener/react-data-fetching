import { useEffect, useState } from "react";
import { useQueryCache } from "./query-cache-provider";
import { AnyQueryKey, QueryFunction, QueryOptions } from "./types";

type QueryConfigObj<R, K extends AnyQueryKey> = {
  queryKey: K;
  queryFn: QueryFunction<R, K>;
  config?: QueryOptions<R>;
};

// type UseQuery = {
//   <R, K extends AnyQueryKey, E = Error>(
//     queryKey: K,
//     queryFn: QueryFunction<R>,
//     config?: QueryOptions<R>
//   ): QueryResult<R, E>;

//   <R, K extends AnyQueryKey, E = Error>({
//     queryKey,
//     queryFn,
//     config,
//   }: QueryConfigObj<R, K>): QueryResult<R, E>;
// };

// type Args<R, K extends AnyQueryKey> =
//   | [K, QueryFunction<R>, QueryOptions<R> | undefined]
//   | [QueryConfigObj<R, K>];

// const parseArgs = <R, K extends AnyQueryKey>(args: Args<R, K>) =>
//   (args[1]
//     ? { queryKey: args[0], queryFn: args[1], config: args[2] }
//     : args[0]) as QueryConfigObj<R, K>;

export const useQuery = <R, K extends AnyQueryKey>({
  queryKey,
  queryFn,
  config,
}: QueryConfigObj<R, K>) => {
  const [_, rerender] = useState<undefined | Record<string, never>>();
  const cache = useQueryCache();
  const { subscribe, onNewInstanceMounted, state, execute } =
    cache.getOrCreateQuery(queryKey, queryFn, config);

  useEffect(
    () =>
      subscribe(() => {
        rerender({});
      }),
    [subscribe]
  );

  useEffect(() => {
    onNewInstanceMounted();
  }, [onNewInstanceMounted]);

  return { ...state, refetch: execute };
};
