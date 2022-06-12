import { useContext } from "react";

import { SelectedCountryContext } from "@/providers/selected-country-provider";

export const useSelectedCountry = () => {
  return useContext(SelectedCountryContext);
};
