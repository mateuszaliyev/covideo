import { Fragment, Key, ReactNode } from "react";
import { MdCheck, MdSearch } from "react-icons/md";

import { Combobox as HeadlessUiCombobox, Transition } from "@headlessui/react";
import clsx from "clsx";

export type ComboboxProps<Value> = {
  compareFunction: (value1: Value, value2: Value) => boolean;
  inputDisplayValue?: (value: Value) => string;
  onChange: (value: Value) => void;
  onInputChange: (query: string) => void;
  optionDisabled?: (value: Value) => boolean;
  optionDisplayValue: (value: Value) => ReactNode;
  optionKey: (value: Value) => Key;
  selectedValue: Value;
  values: Value[];
};

export const Combobox = <Value,>({
  compareFunction,
  inputDisplayValue,
  onChange,
  onInputChange,
  optionDisabled,
  optionDisplayValue,
  optionKey,
  selectedValue,
  values,
}: ComboboxProps<Value>) => (
  <HeadlessUiCombobox onChange={onChange} value={selectedValue}>
    <div className="flex items-center space-x-4 bg-secondary-1000 px-4 text-secondary-400 focus-within:text-white">
      <MdSearch className="h-6 w-6 transition-colors" />
      <HeadlessUiCombobox.Input
        className="w-full bg-secondary-1000 py-3 text-lg outline-none transition-colors placeholder:text-current"
        displayValue={inputDisplayValue}
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Szukaj..."
      />
    </div>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <HeadlessUiCombobox.Options className="mt-4 max-h-96 flex-1 overflow-y-auto">
        {values.map((value) => (
          <HeadlessUiCombobox.Option
            as={Fragment}
            disabled={optionDisabled ? optionDisabled(value) : false}
            key={optionKey(value)}
            value={value}
          >
            {({ active, disabled }) => (
              <li
                className={clsx(
                  "flex select-none items-center space-x-4 py-2 px-4 transition-colors",
                  active && !disabled && "bg-secondary-800",
                  disabled ? "cursor-not-allowed opacity-25" : "cursor-pointer",
                  compareFunction(value, selectedValue)
                    ? "bg-secondary-1000 text-primary-400"
                    : "pl-14"
                )}
              >
                {compareFunction(value, selectedValue) && (
                  <MdCheck className="h-6 w-6" />
                )}
                <span>{optionDisplayValue(value)}</span>
              </li>
            )}
          </HeadlessUiCombobox.Option>
        ))}
      </HeadlessUiCombobox.Options>
    </Transition>
  </HeadlessUiCombobox>
);
