import { Overline } from "@/components/overline";

export const Footer = () => (
  <footer className="w-full border-t-2 border-primary-400 bg-secondary-900 p-4">
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col">
        <Overline margin={false} text="Realizacja">
          <div className="text-xs sm:text-base">
            Mateusz Aliyev, Maksymilian Dendura, Paweł Knap &copy; 2022
          </div>
        </Overline>
      </div>
    </div>
  </footer>
);
