import { act, renderHook, waitFor } from "@testing-library/react";
import { useQueryCache } from "../src/buscar/query-cache-provider";
import { QueryOptions } from "../src/buscar/types";
import { useQuery } from "../src/buscar/use-query";

const queryCache = renderHook(useQueryCache).result.current;

const queryKey = ["foo"] as const;
const queryFn = jest.fn().mockResolvedValue(1);

type Props = QueryOptions;

it("executes the queryFn and updates loading state appropriately", async () => {
  const { result } = renderHook(() => useQuery(queryKey, queryFn));
  expect(result.current).toMatchObject({
    data: undefined,
    error: undefined,
    isFetching: true,
    isLoading: true,
  });

  await waitFor(() => {
    expect(result.current).toMatchObject({
      data: 1,
      error: undefined,
      isFetching: false,
      isLoading: false,
    });
  });

  act(() => {
    result.current.refetch();
  });

  await waitFor(() => {
    expect(result.current).toMatchObject({
      data: 1,
      error: undefined,
      isFetching: true,
      isLoading: false,
    });
  });
});

it("does not execute the queryFn when disabled but does when it becomes enabled", async () => {
  const { result, rerender } = renderHook(
    ({ enabled }: Props) => useQuery(queryKey, queryFn, { enabled }),
    { initialProps: { enabled: false } }
  );
  expect(result.current).toMatchObject({
    data: undefined,
    error: undefined,
    isFetching: false,
    isLoading: false,
  });

  rerender({ enabled: true });

  await waitFor(() => {
    expect(result.current).toMatchObject({
      data: 1,
      error: undefined,
      isFetching: false,
      isLoading: false,
    });
  });
});

it("Removes query after cache timeout expires, but mounting of new instance clears timeout", async () => {
  const hook1 = renderHook(() =>
    useQuery(queryKey, queryFn, { cacheTime: 50 })
  );

  expect(queryCache.getQuery(queryKey)).toBeDefined();

  hook1.unmount();

  await act(() => new Promise((r) => setTimeout(r, 50)));
  expect(queryCache.getQuery(queryKey)).toBeUndefined();

  const hook2 = renderHook(() =>
    useQuery(queryKey, queryFn, { cacheTime: 50 })
  );

  expect(queryCache.getQuery(queryKey)).toBeDefined();
  hook2.unmount();
  expect(queryCache.getQuery(queryKey)).toBeDefined();

  await new Promise((r) => setTimeout(r, 25));
  const hook3 = renderHook(() =>
    useQuery(queryKey, queryFn, { cacheTime: 50 })
  );
  await act(() => new Promise((r) => setTimeout(r, 50)));
  expect(queryCache.getQuery(queryKey)).toBeDefined();
  hook3.unmount();
  await act(() => new Promise((r) => setTimeout(r, 50)));
  expect(queryCache.getQuery(queryKey)).toBeUndefined();
});

it("Refetches when stale and new instance is mounted", async () => {
  renderHook(() => useQuery(queryKey, queryFn, { staleTime: 50 }));

  expect(queryFn).toHaveBeenCalledTimes(1);
  renderHook(() => useQuery(queryKey, queryFn, { staleTime: 50 }));
  // Query wasn't stale
  expect(queryFn).toHaveBeenCalledTimes(1);

  await act(() => new Promise((r) => setTimeout(r, 50)));
  expect(queryFn).toHaveBeenCalledTimes(1);

  renderHook(() => useQuery(queryKey, queryFn, { staleTime: 50 }));
  expect(queryFn).toHaveBeenCalledTimes(2);

  await act(() => Promise.resolve());
});
