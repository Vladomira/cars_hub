import React from "react";
import Image from "next/image";
import { ThumbProps } from "@/types/sidebar";

const ThumbCarousel = ({ selected, onClick, image }: ThumbProps) => {
  return (
    <li
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : "",
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide--button"
        type="button"
      >
        <Image
          className="embla-thumbs__slide--img"
          width={100}
          height={36}
          src={`/background/${image}`}
          alt="Your alt text"
        />
      </button>
    </li>
  );
};

export default ThumbCarousel;
