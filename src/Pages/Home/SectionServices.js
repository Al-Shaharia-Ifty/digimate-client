import React from "react";
import img1 from "../../Assets/Images/fruit-home-image4-768x524.jpg";
import img2 from "../../Assets/Images/fruit-home-image5-768x524.jpg";
import img3 from "../../Assets/Images/fruit-home-image6-768x524.jpg";

const SectionServices = () => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="lg:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div>
          <div className="overflow-hidden">
            <img
              src={img1}
              alt=""
              className="hover:scale-110 transition ease-linear delay-75 duration-200 "
            />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-center mb-6">
              Icon Collections
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img
              src={img2}
              alt=""
              className="hover:scale-110 transition ease-linear delay-75 duration-200 "
            />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-center mb-6">
              Enjoy difference
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img
              src={img3}
              alt=""
              className="hover:scale-110 transition ease-linear delay-75 duration-200 "
            />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-center mb-6">
              Supreme Teamwork
            </h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
