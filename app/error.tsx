"use client";

import { CustomButton } from "@/components";

function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return (
      <main className="overflow-hidden">
         <div className="flex-1 pt-36 pb-36 padding-x">
            <h2>{error.message}</h2>
            <CustomButton
               handleClick={() => reset()}
               title="Try again"
               containerStyles="rounded-full bg-primary-blue mt-5"
               textStyles="text-white text-[18px] leading-[17px] font-bold py-[6px]"
            />
         </div>
      </main>
   );
}
export default Error;
