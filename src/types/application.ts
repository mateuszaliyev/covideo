import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";

export type Application = NextComponentType<
  ApplicationContext,
  ApplicationInitialProps,
  ApplicationProps
>;

export type ApplicationContext = AppContext;

export type ApplicationInitialProps = AppInitialProps;

export type ApplicationPageProps = {
  dehydratedState: unknown;
};

export type ApplicationProps = AppProps;
