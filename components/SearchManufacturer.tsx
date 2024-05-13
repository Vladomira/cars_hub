"use client";
import { useState, Fragment } from "react";
import Image from "next/image";

import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/lib/constants";

const SearchMaufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState<string>(selected);

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src="/car-logo.svg"
              alt={"Car Logo"}
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className={"search-manufacturer__input text-gray-100"}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => {
              if (!e.target.value) setSelected("");
              setQuery(e.target.value);
            }}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option  rounded-full ${
                      active ? "bg-slate-400 text-white" : "text-gray-300"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        />
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMaufacturer;
