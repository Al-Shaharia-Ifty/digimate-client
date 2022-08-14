import React from "react";
import Banner from "../../Assets/Images/Banner-image.jpg";

const Landing = () => {
  return (
    <>
      <div class="hero min-h-[60vh] bg-green-100 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="">
            <img src={Banner} class="h-full rounded-lg shadow-2xl" alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Landing;
