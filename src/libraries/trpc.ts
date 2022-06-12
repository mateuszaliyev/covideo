import { createReactQueryHooks } from "@trpc/react";

import type { ApplicationRouter } from "@/routers";

export const {
  createClient,
  Provider,
  useContext,
  useDehydratedState,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSubscription,
} = createReactQueryHooks<ApplicationRouter>();
