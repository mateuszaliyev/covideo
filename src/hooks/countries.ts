import { useQuery } from "@/libraries/trpc";

export const useCountries = () =>
  useQuery(["country.all"], {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
