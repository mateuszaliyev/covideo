import type { GetStaticProps } from "next";

import { createSSGHelpers } from "@trpc/react/ssg";
import superjson from "superjson";

import { Chart } from "@/components/chart";
import { Headline } from "@/components/headline";
import { Layout } from "@/components/layout";
import { Overline } from "@/components/overline";

import { useConfirmedCases } from "@/hooks/confirmed-cases";
import { useSelectedCountry } from "@/hooks/selected-country";

import { applicationRouter } from "@/routers";

export const getStaticProps: GetStaticProps = async () => {
  const { dehydrate, fetchQuery } = createSSGHelpers({
    ctx: {},
    router: applicationRouter,
    transformer: superjson,
  });

  await fetchQuery("case.confirmed", {
    countrySlug: "poland",
  });

  await fetchQuery("country.all");

  return {
    props: {
      trpcState: dehydrate(),
    },
    revalidate: 60 * 30,
  };
};

const Home = () => {
  const { selectedCountry } = useSelectedCountry();

  const { data } = useConfirmedCases();

  const dailyCases = data
    ? data[data.length - 1].total - data[data.length - 2].total
    : -1;
  const weeklyCases = data
    ? data[data.length - 1].total - data[data.length - 8].total
    : -1;
  const monthlyCases = data
    ? data[data.length - 1].total - data[data.length - 31].total
    : -1;

  return (
    <Layout title={`${selectedCountry.name.polish} | Covideo`}>
      <div className="mx-auto w-full max-w-6xl">
        <Overline text="Łączna liczba przypadków">
          <Headline>{selectedCountry.name.polish}</Headline>
        </Overline>
        <Chart />
        {data && (
          <div className="mt-16 flex flex-col justify-between text-center uppercase sm:flex-col md:flex-row xs:flex-row">
            <div>
              <Overline text="Dzisiaj">
                <Headline>{dailyCases < 0 ? "N/A" : dailyCases}</Headline>
              </Overline>
            </div>
            <div>
              <Overline text="Ostatni tydzień">
                <Headline>{weeklyCases < 0 ? "N/A" : weeklyCases}</Headline>
              </Overline>
            </div>
            <div>
              <Overline text="Ostatni miesiąc">
                <Headline>{monthlyCases < 0 ? "N/A" : monthlyCases}</Headline>
              </Overline>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
