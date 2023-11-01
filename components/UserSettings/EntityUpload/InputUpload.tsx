import React, { SyntheticEvent } from "react";
import Image from "next/image";

type PictureComponentProps = {
   handleChange: (e: SyntheticEvent<HTMLInputElement>) => void;
   title: string;
};
const InputUpload = ({ handleChange, title }: PictureComponentProps) => {
   return (
      <div className="flex items-center">
         <label className=" input-file">
            <input type="file" onChange={handleChange} />
            <Image
               src={"/tech/upload.svg"}
               alt={"upload"}
               width={25}
               height={25}
               className="mr-3"
            />

            <p className="btn-animation border-b-[1px] text-slate-300 font-normal border-slate-300">
               Choose {title}
            </p>
         </label>
      </div>
   );
};

export default InputUpload;
