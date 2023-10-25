"use client";
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10;
      setLimit(newLimit);
   };

   return (
      <div className="w-full flex-center gap-5 mt-10">
         {!isNext && (
            <CustomButton
               title={"Show More"}
               btnType="button"
               containerStyles="bg-slate-700 rounded-full text-white btn-animation shadow-lg shadow-gray-700"
               handleClick={handleNavigation}
            />
         )}
      </div>
   );
};

export default ShowMore;
