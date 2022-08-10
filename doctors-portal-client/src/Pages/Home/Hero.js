import React from "react";
import chair from "../../assets/images/chair.png";
import BackgroundChair from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Hero = () => {
   return (
      <div
         style={{ backgroundImage: `url(${BackgroundChair})` , backgroundSize: 'cover'}}
         className="hero min-h-screen"
      >
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img
               src={chair}
               alt="doc-chair"
               className="max-w-lg rounded-lg"
            />
            <div>
               <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
               <p className="py-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
               </p>
               <PrimaryButton>Get Started</PrimaryButton>
            </div>
         </div>
      </div>
   );
};

export default Hero;
