import { createContext, FC, ReactNode, useContext } from "react";
import { makeQueryCache } from "./query-cache";
import { QueryCache } from "./types";

export const QueryCacheContext = createContext<QueryCache>(undefined as never);

const defaultQueryCache = makeQueryCache();

export const useQueryCache = () => {
  const ctx = useContext<QueryCache>(QueryCacheContext);
  return ctx == null ? defaultQueryCache : ctx;
};

type Props = {
  cache: QueryCache;
  children: ReactNode;
};

export const QueryCacheProvider: FC<Props> = ({ children, cache }) => (
  <QueryCacheContext.Provider value={cache}>
    {children}
  </QueryCacheContext.Provider>
);
