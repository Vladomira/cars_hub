import React, { SyntheticEvent } from "react";

type PictureComponentProps = {
   handleChange: (e: SyntheticEvent<HTMLInputElement>) => void;
   title: string;
};
const InputUpload = ({ handleChange, title }: PictureComponentProps) => {
   return (
      <div className="flex items-center">
         <label className=" input-file">
            <input type="file" onChange={handleChange} />

            <p className="btn-animation border-b-[1px] text-slate-300 font-normal text-base border-slate-300">
               Choose {title}
            </p>
         </label>
      </div>
   );
};

export default InputUpload;
