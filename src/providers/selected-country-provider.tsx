import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import type { Country } from "@/types";

export type SelectContryProviderProps = {
  children: ReactNode;
};

const defaultCountry: Country = {
  available: true,
  code: "PL",
  name: {
    english: "Poland",
    polish: "Polska",
  },
  slug: "poland",
};

export const SelectedCountryContext = createContext<{
  selectedCountry: Country;
  setSelectedCountry: Dispatch<SetStateAction<Country>>;
}>({
  selectedCountry: defaultCountry,
  setSelectedCountry: () => {
    return;
  },
});

export const SelectedCountryProvider = ({
  children,
}: SelectContryProviderProps) => {
  const [selectedCountry, setSelectedCountry] =
    useState<Country>(defaultCountry);

  return (
    <SelectedCountryContext.Provider
      value={{ selectedCountry, setSelectedCountry }}
    >
      {children}
    </SelectedCountryContext.Provider>
  );
};
