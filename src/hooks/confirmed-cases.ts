import { useSelectedCountry } from "@/hooks/selected-country";

import { useQuery } from "@/libraries/trpc";

export const useConfirmedCases = () => {
  const { selectedCountry } = useSelectedCountry();

  return useQuery(
    [
      "case.confirmed",
      {
        countrySlug: selectedCountry?.slug ?? "poland",
      },
    ],
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};
