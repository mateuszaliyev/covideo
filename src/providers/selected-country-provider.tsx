import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { useQuery } from "@/libraries/trpc";
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

  const { refetch } = useQuery(
    ["case.confirmed", { countrySlug: selectedCountry.slug }],
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );

  useEffect(() => {
    void refetch();
  }, [refetch, selectedCountry]);

  return (
    <SelectedCountryContext.Provider
      value={{ selectedCountry, setSelectedCountry }}
    >
      {children}
    </SelectedCountryContext.Provider>
  );
};
