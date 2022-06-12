import { ReactNode } from "react";

import { SelectedCountryProvider } from "@/providers/selected-country-provider";

export type ApplicationProviderProps = {
  children: ReactNode;
};

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => (
  <SelectedCountryProvider>{children}</SelectedCountryProvider>
);
