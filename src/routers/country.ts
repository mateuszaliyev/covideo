import { readFile } from "fs/promises";
import { resolve } from "path";

import { createRouter } from "@/routers/create";

import { Country, Covid19ApiCountries } from "@/types";

export const countryRouter = createRouter().query("all", {
  async resolve() {
    const apiCountries = JSON.parse(
      await readFile(
        resolve(process.cwd(), "src/data/countries/api.json"),
        "utf-8"
      )
    ) as Covid19ApiCountries;

    const polishCountryNames = JSON.parse(
      await readFile(
        resolve(process.cwd(), "src/data/countries/pl.json"),
        "utf-8"
      )
    ) as Record<string, string>;

    const unavailableCountries = JSON.parse(
      await readFile(
        resolve(process.cwd(), "src/data/countries/unavailable.json"),
        "utf-8"
      )
    ) as string[];

    const countries: Country[] = [];

    for (const { Country, ISO2, Slug } of apiCountries) {
      if (!(ISO2 in polishCountryNames)) {
        continue;
      }

      countries.push({
        available: !unavailableCountries.includes(Slug),
        code: ISO2,
        name: {
          english: Country,
          polish: polishCountryNames[ISO2],
        },
        slug: Slug,
      });
    }

    return {
      countries: countries.sort((a, b) =>
        a.name.polish.localeCompare(b.name.polish, "pl")
      ),
    };
  },
});
