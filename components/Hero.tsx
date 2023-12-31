"use client";
import Image from "next/image";
import { CustomButton } from ".";
import AnimationWrapper from "./AnimationWrapper";

const Hero = () => {
   return (
      <AnimationWrapper>
         <div className="hero bg-[url('/hero/gradient.jpeg')] bg-cover bg-no-repeat bg-center">
            <div className="flex-1 pt-36 padding-x">
               <h1 className="hero__title">
                  Find, book or rent a car --quickly and easily!
               </h1>
               <p className="hero__subtitle">
                  Streamline your car rental experience with our effortless
                  booking process.
               </p>

               <CustomButton
                  title="Explore Cars"
                  containerStyles="btn-animation btn-bg  text-white rounded-full mt-10"
               />
            </div>
            <div className="hero__image-container ">
               <div className="hero__image">
                  <Image
                     src={"/hero/hero.png"}
                     alt="hero"
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                     className="object-contain"
                  />
               </div>

               <div className="hero__image-overlay" />
            </div>
         </div>
      </AnimationWrapper>
   );
};

export default Hero;
