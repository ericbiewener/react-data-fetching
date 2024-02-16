import { AnyQueryKey, DefinedQueryKeyPart } from "./types";

const isObject = (a: any): a is Record<string, unknown> =>
  a && typeof a === "object" && !Array.isArray(a);

const stableStringifyReplacer = (_: unknown, value: DefinedQueryKeyPart) =>
  isObject(value)
    ? Object.assign(
        {},
        ...Object.keys(value)
          .sort()
          .map((key) => ({
            [key]: value[key],
          }))
      )
    : value;

const stableStringify = (obj: AnyQueryKey) =>
  JSON.stringify(obj, stableStringifyReplacer);

export const serializeQueryKey = (queryKey: AnyQueryKey) => {
  if (!queryKey) {
    return [];
  }

  if (!Array.isArray(queryKey)) {
    queryKey = [queryKey];
  }

  if (queryKey.some((d) => typeof d === "function")) {
    throw new Error("A valid query key is required!");
  }

  const queryHash = stableStringify(queryKey);
  queryKey = JSON.parse(queryHash);

  if (!queryHash) {
    return [];
  }

  return [queryHash, queryKey] as const;
};
