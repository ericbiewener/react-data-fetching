# React Data Fetching

This essentially clones a subset of React Query 2 functionality. The reasons behind this are threefold:

1. React Query 2 provides far more functionality than any individual application is likely to need, which means wasted bytes.
2. React Query 2 is not compatible with React 18.
3. One must upgrade to React Query 4 (`@tanstack/react-query) in order to gain React 18 compatibility. However, with v3, React Query removed its tight coupling to React in order to support other UI frameworks, such as Vue. This resulted in a near doubling of bundle size and a greatly complected internal state solution.
