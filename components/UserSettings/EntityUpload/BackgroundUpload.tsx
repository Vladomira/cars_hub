import React, { useEffect } from "react";
import PictureComponent from "./InputUpload";
import { CustomButton } from "@/components";
import { SettingsPictureProps } from "@/types/user-preference";
import useChangePicture from "@/hooks/useChangePicture";

const BackgroundUpload = ({ setImage }: SettingsPictureProps) => {
  const { handleChange, handleClick, disabled, testBack, loading } =
    useChangePicture();

  useEffect(() => {
    setImage(testBack);
  }, [testBack]);

  return (
    <div className="flex items-center flex-col">
      <PictureComponent
        handleChange={(e) => handleChange("background", e)}
        title={"background"}
      />
      <CustomButton
        title={loading ? "Please wait..." : "Upload"}
        containerStyles={`mt-3 btn-upload ${
          disabled ? "pointer-events-none" : "pointer-events-auto"
        } 
            `}
        btnType="button"
        handleClick={() => handleClick("background")}
        isDisabled={disabled}
        rightIcon="/tech/upload.svg"
        iconStyles="ml-3"
      />
    </div>
  );
};
export default BackgroundUpload;
