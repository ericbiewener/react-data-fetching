import { useCallback, useState } from "react";
import {
  MutateFunction,
  MutationOptions,
  MutationResultPair,
  MutationState,
} from "./types";

const defaultState = {
  data: undefined,
  isLoading: false,
  isError: false,
};

/**
 * Omitted stuff:
 * isLatest check... worth looking more into what this is doing
 */

export const useMutation = <R, V, E = Error>(
  mutationFn: (variables: V) => Promise<R>,
  { onMutate, onSuccess, onError, onSettled }: MutationOptions<R, V, E> = {}
): MutationResultPair<R, V, E> => {
  const [state, setState] = useState(defaultState as MutationState<R>);

  const mutate = useCallback<MutateFunction<R, V, E>>(
    async (variables, config = {}) => {
      onMutate?.();
      let error: E | null = null;
      let data: R | undefined;

      try {
        setState((s) => ({ ...s, isLoading: true }));
        data = await mutationFn(variables);
        await onSuccess?.(data, variables);
        await config.onSuccess?.(data, variables);
      } catch (e) {
        // TODO: this type assertion is unsafe. There are 3 functions that could be throwing an
        // error: mutationFn, onSuccess, config.onSuccess -- who knows what type it is!
        error = e as E;
        await onError?.(error, variables);
        await config.onError?.(error, variables);
      } finally {
        setState((s) => ({ ...s, data, isLoading: false }));
        await onSettled?.(data, error, variables);
        await config.onSettled?.(data, error, variables);
      }

      // TODO This is an erroneous type that is present in RQ 2.5.6 and fixed in the next patch release. Return type should be R | undefined.
      return data as R;
    },
    [mutationFn, onMutate, onSuccess, onError, onSettled]
  );

  return [mutate, state];
};
