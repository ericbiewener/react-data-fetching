export type QueryOptions<R, E = Error> = {
  enabled?: boolean;
  cacheTime?: number;
  staleTime?: number;
  // TODO: Not implemented. Some shoudl perhaps be removed from API?
  refetchOnMount?: boolean;
  onSuccess?: (result: R) => void;
  onError?: (e: E) => void;
  onSettled?: (data: R | undefined, error: E | null) => void;
  refetchInterval?: number;
  initialStale?: boolean;
  initialData?: R | (() => R);
  // TODO: remove from API
  refetchOnWindowFocus?: boolean;
  // Fake property just to make use of generic in order to keep type the same as on `main`
  foo?: E;
};

export type QueryResult<R, E = Error> = QueryState<R, E> & {
  refetch: () => void;
};

export type DefinedQueryKeyPart =
  | string
  | object
  | boolean
  | number
  | readonly QueryKeyPart[];

export type QueryKeyPart =
  | string
  | object
  | boolean
  | number
  | readonly QueryKeyPart[]
  | null
  | undefined;

export type AnyQueryKey = readonly [DefinedQueryKeyPart, ...QueryKeyPart[]]; // this forces the key to be inferred as a tuple

export type QueryState<R, E = Error> = {
  data?: R;
  error?: E;
  isLoading: boolean;
  isFetching: boolean;
  dataUpdatedAt: number;
};

export type Query<R = unknown> = {
  state: QueryState<R>;
  hash: string;
  subscribe: (listener: QueryListener) => () => void;
  updateConfig: (newConfig: QueryOptions<R>) => void;
  execute: () => void;
  clear: () => void;
  onNewInstanceMounted: () => void;
};
export type Queries = Record<string, Query<any>>;

export type QueryCache = {
  getQuery: <R>(queryKey: AnyQueryKey) => Query<R> | undefined;
  getQueryData: <R>(...queryKey: AnyQueryKey) => Query<R>["state"]["data"];
  createQuery: <R, K extends AnyQueryKey>(
    queryCache: QueryCache,
    queryHash: string,
    queryKey: K,
    queryFn: QueryFunction<R, K>,
    config?: QueryOptions<R>
  ) => Query<R>;
  getOrCreateQuery: <R, K extends AnyQueryKey>(
    queryKey: K,
    queryFn: QueryFunction<R, K>,
    config?: QueryOptions<R>
  ) => Query<R>;
  removeQueries: RemoveQueries;
  // TODO: not implemented;
  invalidateQueries: any;
  setQueryData: any;
  cancelQueries: any;
  clear: any;
  getQueries: any;
  isFetching: any;
};

// TODO: remove queryKey argument?
export type QueryFunction<R, K extends AnyQueryKey> = (
  ...queryKey: K
) => Promise<R>;

export type QueryListener = (...args: any[]) => void;

// Unimplemented
export type RemoveQueries = (...args: any[]) => void;

export type MutationState<R> = {
  data?: R;
  isLoading: boolean;
  isError: boolean;
};

export type MutateOptions<R, V, E = Error> = {
  onSuccess?: (data: R, variables: V) => void | Promise<void>;
  onError?: (error: E, variables: V) => void | Promise<void>;
  onSettled?: (
    // TODO: why would error be null rather than | undefined? Shoudl just align them
    data: R | undefined,
    error: E | null,
    variables: V
  ) => void | Promise<void>;
};

export type MutationOptions<R, V, E = Error> = MutateOptions<R, V, E> & {
  onMutate?: () => void | Promise<void>;
};

export type MutationResultPair<R, V, E = Error> = [
  MutateFunction<R, V, E>,
  MutationState<R>
];

export type MutateFunction<R, V, E = Error> = (
  variables: V,
  config?: Omit<MutationOptions<R, V, E>, "onMutate">
) => Promise<R>;

export type DefaultQueryConfig = {
  cacheTime?: number;
  staleTime?: number;
};
