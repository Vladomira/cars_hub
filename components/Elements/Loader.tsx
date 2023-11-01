"use client";
import React from "react";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
   return (
      <LineWave
         height="150"
         width="150"
         color="#1e293b"
         ariaLabel="line-wave"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
         firstLineColor="#1e293b"
         middleLineColor="#1e293b"
         lastLineColor="#64748B"
      />
   );
};

export default Loader;
