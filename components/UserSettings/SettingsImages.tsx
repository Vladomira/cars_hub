import React from "react";
import BackgroundsCarousel from "./BackgroundCarousel/BackgroundsCarousel";
import BackgroundUpload from "./EntityUpload/BackgroundUpload";
import { PhotoProps, SettingsPictureProps } from "@/types";
import UserPictureUpload from "./EntityUpload/UserPictureUpload";

const SettingsImages = ({
   image,
   setImage,
   photo,
   setPhoto,
}: SettingsPictureProps & PhotoProps) => {
   return (
      <div>
         <div className="flex justify-between">
            <UserPictureUpload setImage={setPhoto} image={photo} />
            <BackgroundUpload image={image} setImage={setImage} />
         </div>
         <BackgroundsCarousel setImage={setImage} image={image} />
      </div>
   );
};

export default SettingsImages;
