"use client"
import React, { Fragment } from "react";

const BackError = () => {
  return (
    <Fragment>
      <div className="text-white/60 flex flex-col items-center justify-center whitespace-nowrap absolute top-30 left-115">
        <p className="text-[25px]">Bu yilga tegishli kino topilmadi</p>
        <button
          onClick={() => history.back()}
          className="text-black text-[16px] mt-2 cursor-pointer border px-3 py-1 rounded-lg bg-white/80 font-medium flex items-center justify-center"
        >
          Ortga qaytish
        </button>
      </div>
    </Fragment>
  );
};

export default BackError;
