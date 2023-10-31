import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { userBackgrounds } from "@/lib/constants";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import Thumb from "./Thumb";

const BackgroundsList = () => {
   const { changeUserBack } = useContext(UserPreferenceContext);
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

   return (
      <div className="embla">
         <div ref={emblaMainRef} className="overflow-hidden">
            <ul className="embla__container">
               {userBackgrounds.map((el) => (
                  <li
                     className="embla__slide"
                     key={el}
                     onClick={() => changeUserBack(el)}
                  >
                     <Image
                        src={`/background/${el}`}
                        alt={"image"}
                        width={200}
                        height={200}
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
   );
};

export default BackgroundsList;
