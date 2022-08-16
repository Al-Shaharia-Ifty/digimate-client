import React from "react";
import SectionServices from "./SectionServices";

const Section = () => {
  return (
    <>
      <div className="mt-16 mx-8 lg:mx-12 flex justify-center">
        <div className=" lg:w-6/12 w-full">
          <h1 className=" text-4xl text-center mb-5 font-bold">Our Services</h1>
          <p className="text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            earum, cumque obcaecati sed magnam quod deleniti dolor nam quidem
            consequatur?
          </p>
        </div>
      </div>
      <SectionServices />
    </>
  );
};

export default Section;
