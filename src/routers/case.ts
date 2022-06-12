import { readFile } from "fs/promises";
import { resolve } from "path";

import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { API_URL_COUNTRY } from "@/configuration";

import { createRouter } from "@/routers/create";

import type { Case, Covid19ApiCases, Covid19ApiCountries } from "@/types";

export const caseRouter = createRouter().query("confirmed", {
  input: z.object({
    countrySlug: z.string(),
  }),
  async resolve({ input }) {
    const apiCountries = JSON.parse(
      await readFile(
        resolve(process.cwd(), "src/data/countries/api.json"),
        "utf-8"
      )
    ) as Covid19ApiCountries;

    if (!apiCountries.some(({ Slug }) => input.countrySlug === Slug)) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Country with slug \`${input.countrySlug}\` does not exist.`,
      });
    }

    const response = await fetch(API_URL_COUNTRY(input.countrySlug));

    if (!response.ok) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Service unavailable.",
      });
    }

    const apiCases = (await response.json()) as Covid19ApiCases;

    const cases: Record<string, number> = {};

    apiCases.forEach(({ Cases, Date }) => {
      if (!(Date in cases)) {
        cases[Date] = 0;
      }

      cases[Date] += Cases;
    });

    return Object.entries(cases).map(
      ([date, total]) =>
        ({
          date,
          total,
        } as Case)
    );
  },
});
