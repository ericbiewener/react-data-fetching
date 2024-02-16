// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { renderHook, cleanup } from "@testing-library/react";
import { useQueryCache } from "./src/buscar/query-provider";

const queryCache = renderHook(useQueryCache).result.current;

beforeEach(() => {
  queryCache.removeQueries();
});

afterEach(cleanup)
