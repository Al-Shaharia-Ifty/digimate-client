import React from "react";
import Banner from "../../Assets/Images/Banner-image.jpg";

const Landing = () => {
  return (
    <>
      <div className="hero min-h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-5xl font-bold"
            >
              Box Office News!
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              className="py-6 max-w-xl"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1300"
              //   data-aos-duration="800"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="">
            <img
              src={Banner}
              className="max-h-80 rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Landing;
