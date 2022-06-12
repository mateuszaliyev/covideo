import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { MdFlag } from "react-icons/md";

import Head from "next/head";

import { Button } from "@/components/button";
import { Combobox } from "@/components/combobox";
import { Dialog } from "@/components/dialog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KeyboardKey } from "@/components/keyboard-key";

import { useSelectedCountry } from "@/hooks/selected-country";

import { useQuery } from "@/libraries/trpc";

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { selectedCountry, setSelectedCountry } = useSelectedCountry();

  const countries = useQuery(["country.all"], {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const filteredCountries = useMemo(() => {
    if (!countries.data) {
      return [];
    }

    return countries.data.countries.filter((country) =>
      country.name.polish
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase())
    );
  }, [countries, searchQuery]);

  const handleDialogOpen = useCallback((event: KeyboardEvent) => {
    if (event.key === "/") {
      setDialogOpen((previousDialogOpen) => !previousDialogOpen);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleDialogOpen);

    return () => window.removeEventListener("keydown", handleDialogOpen);
  }, [handleDialogOpen]);

  return (
    <>
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/Jost-VF.ttf"
          rel="preload"
          type="font/ttf"
        />
        <link href="/images/logo.svg" rel="icon" />
        <meta
          content="Prezentacja danych dotyczących zachorowań na COVID-19"
          name="description"
        />
        <meta content="noindex" name="robots" />
        <title>{title}</title>
      </Head>
      <Header>
        <Button
          endIcon={<KeyboardKey className="hidden md:flex">/</KeyboardKey>}
          onClick={() => setDialogOpen(true)}
          startIcon={<MdFlag className="h-6 w-6" />}
        >
          <span className="hidden xs:block">Wybierz państwo</span>
        </Button>
      </Header>
      <main className="mx-auto flex w-full flex-1 flex-col justify-center py-8 px-4 sm:py-16">
        {children}
      </main>
      <Footer />
      {countries.data && (
        <Dialog
          afterEnter={() => {
            document
              .querySelector<HTMLInputElement>(
                'input[id^="headlessui-combobox-input-"'
              )
              ?.focus();

            document
              .getElementById(selectedCountry.code)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          afterLeave={() => setSearchQuery("")}
          onClose={setDialogOpen}
          open={dialogOpen}
          title="Wybierz państwo"
        >
          <Combobox
            compareFunction={(country1, country2) =>
              country1.code === country2.code
            }
            inputDisplayValue={() => searchQuery}
            onChange={(country) => {
              setSelectedCountry(country);
              setDialogOpen(false);
            }}
            onInputChange={(query) => setSearchQuery(query)}
            optionDisabled={(country) => !country.available}
            optionDisplayValue={(country) => country.name.polish}
            optionKey={(country) => country.code}
            selectedValue={selectedCountry}
            values={filteredCountries}
          />
        </Dialog>
      )}
    </>
  );
};
