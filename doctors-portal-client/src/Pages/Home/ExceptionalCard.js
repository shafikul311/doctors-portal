import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ExceptionalCard = () => {
   return (
      <div className="hero min-h-screen">
         <div className="hero-content flex-col lg:flex-row">
            <div className="flex-1 flex items-center justify-center ">
            <img
               src={treatment}
               className="max-w-sm rounded-lg shadow-2xl " alt="treatment"/>
            </div>
            <div className="flex-1">
               <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
               <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
               </p>
               <PrimaryButton>Book Now</PrimaryButton>
            </div>
         </div>
      </div>      
   );
};

export default ExceptionalCard;
