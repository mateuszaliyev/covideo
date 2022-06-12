import { withTRPC } from "@trpc/next";
import superjson from "superjson";

import { URL } from "@/configuration";

import { ApplicationProvider } from "@/providers/application-provider";

import "@/styles/globals.css";

import type { ApplicationRouter } from "@/routers";
import type { Application } from "@/types";

const Application: Application = ({ Component, pageProps }) => (
  <ApplicationProvider>
    <Component {...pageProps} />
  </ApplicationProvider>
);

export default withTRPC<ApplicationRouter>({
  config() {
    const url = `${URL}api/trpc`;

    return {
      transformer: superjson,
      url,
    };
  },
})(Application);
