import { router } from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import superjson from "superjson";

import { caseRouter } from "@/routers/case";
import { countryRouter } from "@/routers/country";

export type ApplicationRouter = typeof applicationRouter;

export const applicationRouter = router()
  .transformer(superjson)
  .merge("case.", caseRouter)
  .merge("country.", countryRouter);

export const trpcApiHandler = createNextApiHandler({
  createContext: () => null,
  router: applicationRouter,
});
