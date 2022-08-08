import React from "react";
import treatment from "../../assets/images/treatment.png";

const ExceptionalCard = () => {
   return (
      <div class="card lg:card-side bg-base-100 place-content-center my-16">
         <div class="flex-1">
            <figure>
               <img class="w-1/2 rounded-md" src={treatment} alt="Album" />
            </figure>
         </div>
         <div class="flex-1 card-body justify-center w-4/5">
            <h2 class="card-title text-4xl">
               Exceptional Dental Care, span on Your Terms
            </h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Distinctio at natus doloribus? Quos, dolore cum. Lorem ipsum
               dolor sit amet consectetur adipisicing elit. Repellendus
               reprehenderit dignissimos nulla? Incidunt, nesciunt ullam.
            </p>
            <div class="card-actions">
               <button class="btn btn-primary text-white uppercase">
                  Get Started
               </button>
            </div>
         </div>
      </div>
   );
};

export default ExceptionalCard;
