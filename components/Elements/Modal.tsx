"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "@/types";

const Modal = ({
   isOpen,
   closeModal,
   modalBoxStyles,
   children,
}: ModalProps) => {
   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as={"div"} className={"relative z-10"} onClose={closeModal}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4 to-current">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel
                        className={`relative overflow-y-auto transform rounded-2xl bg-white p-6 shadow-xl transition-all ${modalBoxStyles}`}
                     >
                        <button
                           type="button"
                           onClick={closeModal}
                           className="absolute top-2 right-2 z-10 p-2 bg-primary-blue-100 rounded-full"
                        >
                           <Image
                              src={"/close.svg"}
                              alt={"close"}
                              width={20}
                              height={20}
                              className="object-contain"
                           />
                        </button>
                        {children}
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};

export default Modal;
