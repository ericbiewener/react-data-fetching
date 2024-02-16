import { act, renderHook, waitFor } from "@testing-library/react";
import { useMutation } from "../src/buscar/use-mutation";

const last = <A>(arr: A[]) => arr[arr.length - 1];

const mutationFn = jest.fn().mockResolvedValue(1);

it("mutation can be executed without any config", async () => {
  const { result } = renderHook(() => useMutation(mutationFn));
  expect(result.current[1]).toEqual({
    isLoading: false,
  });

  act(() => {
    result.current[0]({ foo: 1 });
  });
  expect(result.current[1].isLoading).toBe(true);

  await waitFor(() => {
    expect(result.current[1].isLoading).toBe(false);
  });
});

it("useMutation config and mutate config functions are both called in the correct order on success", async () => {
  const trackCallTimestamp = () => performance.now() as unknown as void;
  const config1 = {
    onMutate: jest.fn(trackCallTimestamp),
    onSuccess: jest.fn(trackCallTimestamp),
    onError: jest.fn(trackCallTimestamp),
    onSettled: jest.fn(trackCallTimestamp),
  };

  const config2 = {
    onSuccess: jest.fn(trackCallTimestamp),
    onError: jest.fn(trackCallTimestamp),
    onSettled: jest.fn(trackCallTimestamp),
  };

  const { result } = renderHook(() => useMutation(mutationFn, config1));

  act(() => {
    result.current[0]({ foo: 1 }, config2);
  });

  await waitFor(() => {
    expect(result.current[1].isLoading).toBe(false);
  });

  expect(config1.onMutate).toHaveBeenCalledTimes(1);
  expect(config1.onSuccess).toHaveBeenCalledTimes(1);
  expect(config1.onError).toHaveBeenCalledTimes(0);
  expect(config1.onSettled).toHaveBeenCalledTimes(1);

  expect(config2.onSuccess).toHaveBeenCalledTimes(1);
  expect(config2.onError).toHaveBeenCalledTimes(0);
  expect(config2.onSettled).toHaveBeenCalledTimes(1);

  const expectedCallOrder = [
    config1.onMutate,
    config1.onSuccess,
    config2.onSuccess,
    config1.onSettled,
    config2.onSettled,
  ].map((fn) => last(fn.mock.results).value);

  const sortedCallOrder = [...expectedCallOrder].sort();
  expect(expectedCallOrder).toEqual(sortedCallOrder);
});

it("useMutation config and mutate config functions are both called in the correct order on error", async () => {
  mutationFn.mockRejectedValueOnce(new Error());

  const trackCallTimestamp = () => performance.now() as unknown as void;
  const config1 = {
    onMutate: jest.fn(trackCallTimestamp),
    onSuccess: jest.fn(trackCallTimestamp),
    onError: jest.fn(trackCallTimestamp),
    onSettled: jest.fn(trackCallTimestamp),
  };

  const config2 = {
    onSuccess: jest.fn(trackCallTimestamp),
    onError: jest.fn(trackCallTimestamp),
    onSettled: jest.fn(trackCallTimestamp),
  };

  const { result } = renderHook(() => useMutation(mutationFn, config1));

  act(() => {
    result.current[0]({ foo: 1 }, config2);
  });

  await waitFor(() => {
    expect(result.current[1].isLoading).toBe(false);
  });

  expect(config1.onMutate).toHaveBeenCalledTimes(1);
  expect(config1.onSuccess).toHaveBeenCalledTimes(0);
  expect(config1.onError).toHaveBeenCalledTimes(1);
  expect(config1.onSettled).toHaveBeenCalledTimes(1);

  expect(config2.onSuccess).toHaveBeenCalledTimes(0);
  expect(config2.onError).toHaveBeenCalledTimes(1);
  expect(config2.onSettled).toHaveBeenCalledTimes(1);

  const expectedCallOrder = [
    config1.onMutate,
    config1.onError,
    config2.onError,
    config1.onSettled,
    config2.onSettled,
  ].map((fn) => last(fn.mock.results).value);

  const sortedCallOrder = [...expectedCallOrder].sort();
  expect(expectedCallOrder).toEqual(sortedCallOrder);
});

it("onSettled gets called and isLoading is reset to false even if config callbacks error", async () => {
  const onSuccessError = new Error("onSuccess");
  const onErrorError = new Error("onError");
  const config = {
    onSuccess: jest.fn().mockRejectedValue(onSuccessError),
    onError: jest.fn().mockRejectedValue(onErrorError),
    onSettled: jest.fn(),
  };

  const { result } = renderHook(() => useMutation(mutationFn, config));

  act(() => {
    (result.current[0]({ foo: 1 }) as Promise<void>).catch(() => {});
  });
  expect(result.current[1].isLoading).toBe(true);

  await waitFor(() => {
    expect(result.current[1].isLoading).toBe(false);
  });

  expect(config.onError).toHaveBeenCalledWith(onSuccessError);
  expect(config.onSettled).toHaveBeenCalledWith(1, onSuccessError, { foo: 1 });
});

it("onSettled gets called and isLoading is reset to false even if mutate function config callbacks error", async () => {
  const onSuccessError = new Error("onSuccess");
  const onErrorError = new Error("onError");
  const config = {
    onSuccess: jest.fn().mockRejectedValue(onSuccessError),
    onError: jest.fn().mockRejectedValue(onErrorError),
    onSettled: jest.fn(),
  };

  const { result } = renderHook(() => useMutation(mutationFn));

  act(() => {
    (result.current[0]({ foo: 1 }, config) as Promise<void>).catch(() => {});
  });
  expect(result.current[1].isLoading).toBe(true);

  await waitFor(() => {
    expect(result.current[1].isLoading).toBe(false);
  });

  expect(config.onError).toHaveBeenCalledWith(onSuccessError);
  expect(config.onSettled).toHaveBeenCalledWith(1, onSuccessError, { foo: 1 });
});
