"use client";
import React from "react";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
   return (
      <LineWave
         height="150"
         width="150"
         color="#007aff"
         ariaLabel="line-wave"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
         firstLineColor="#007aff"
         middleLineColor="#007aff"
         lastLineColor="#007aff"
      />
   );
};

export default Loader;
