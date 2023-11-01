import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { userBackgrounds } from "@/lib/constants";
import Thumb from "./ThumbCarousel";
import { SettingsPictureProps } from "@/types";
import { CustomButton } from "@/components";
import useChangePicture from "@/hooks/useChangePicture";

const BackgroundsCarousel = ({ setImage }: SettingsPictureProps) => {
   const { handleChange, handleClick, disabled, testBack, loading } =
      useChangePicture();

   useEffect(() => {
      setImage(testBack);
   }, [testBack]);

   const [selectedIndex, setSelectedIndex] = useState(0);
   const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: "keepSnaps",
      dragFree: true,
   });
   const onThumbClick = useCallback(
      (index: number) => {
         if (!emblaMainApi || !emblaThumbsApi) return;
         emblaMainApi.scrollTo(index);
      },
      [emblaMainApi, emblaThumbsApi]
   );

   const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
   }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

   useEffect(() => {
      if (!emblaMainApi) return;
      onSelect();
      emblaMainApi.on("select", onSelect);
      emblaMainApi.on("reInit", onSelect);
   }, [emblaMainApi, onSelect]);
   const onHandleClick = async (
      e: React.MouseEvent<HTMLLIElement>,
      photo: string
   ) => {
      const photoLocation = `/background/${photo}`;
      const imageBlob = await fetch(photoLocation).then((response) =>
         response.blob()
      );
      handleChange("background", undefined, imageBlob);
   };

   return (
      <div className="flex flex-col mt-10">
         <h2 className="mb-3  text-slate-300 font-normal">
            Choose background:
         </h2>
         <div className="embla ">
            <div ref={emblaMainRef} className="overflow-hidden">
               <ul className="embla__container">
                  {userBackgrounds.map((el) => (
                     <li
                        className="embla__slide"
                        key={el}
                        onClick={(e) => onHandleClick(e, el)}
                     >
                        <Image
                           src={`/background/${el}`}
                           alt={"image"}
                           width={200}
                           height={160}
                           className="embla__slide--img "
                        />
                     </li>
                  ))}
               </ul>

               <div className="embla-thumbs">
                  <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                     <ul className="embla-thumbs__container">
                        {userBackgrounds.map((el, index) => (
                           <Thumb
                              onClick={() => onThumbClick(index)}
                              selected={index === selectedIndex}
                              key={index}
                              image={el}
                           />
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <CustomButton
            title={loading ? "Please wait..." : "Upload"}
            containerStyles={`mt-3 btn-upload ${
               disabled ? "pointer-events-none" : "pointer-events-auto"
            } 
         `}
            btnType="button"
            handleClick={() => handleClick("background")}
            isDisabled={disabled}
         />
      </div>
   );
};

export default BackgroundsCarousel;
