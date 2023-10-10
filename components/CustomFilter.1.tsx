// "use client";
// import { Fragment, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Listbox, Transition } from "@headlessui/react";
// import { CustomFilterProps, OptionProps } from "@/types";
// import { updateSearchParams, isExistSearchParams } from "@/utils";

// export const CustomFilter = ({ title, options }: CustomFilterProps) => {
//    const router = useRouter();
//    const [selected, setSelected] = useState<OptionProps>(options[0]);
//    const handleUpdateParams = (e: { title: string; value: string }) => {
//       if (!isExistSearchParams()) {
//       }

//       const newPathName = updateSearchParams(
//          title.toLowerCase(),
//          e.value.toLowerCase()
//       );

//       router.push(newPathName);
//    };

//    return (
//       <>
//          <div className="w-fit">
//             <Listbox
//                value={selected}
//                onChange={(e) => {
//                   setSelected(e);
//                   handleUpdateParams(e);
//                }}
//             >
//                <div className="relative w-fit z-10">
//                   <Listbox.Button className="custom-filter__btn">
//                      <span className="block truncate">{selected.title}</span>
//                      <Image
//                         src="/chevron-up-down.svg"
//                         width={20}
//                         height={20}
//                         className="ml-4 object-contain"
//                         alt="chevron_up-down"
//                      />
//                   </Listbox.Button>

//                   <Transition
//                      as={Fragment}
//                      leave="transition ease-in duration-100"
//                      leaveFrom="opacity-100"
//                      leaveTo="opacity-0"
//                   >
//                      <Listbox.Options className="custom-filter__options">
//                         {options.map((option) => (
//                            <Listbox.Option
//                               key={option.title}
//                               className={({ active }) =>
//                                  `relative cursor-default select-none py-2 px-4 ${
//                                     active
//                                        ? "bg-primary-blue text-white"
//                                        : "text-gray-900"
//                                  }`
//                               }
//                               value={option}
//                            >
//                               {(param) => (
//                                  <span
//                                     className={`block truncate ${
//                                        param.selected
//                                           ? "font-bold"
//                                           : "font-normal"
//                                     }`}
//                                  >
//                                     {option.title}
//                                  </span>
//                               )}
//                            </Listbox.Option>
//                         ))}
//                      </Listbox.Options>
//                   </Transition>
//                </div>
//             </Listbox>
//          </div>
//       </>
//    );
// };
