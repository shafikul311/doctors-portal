import React from "react";

const InfoCard = ({ img, bgClass, cardTitle }) => {
   return (
      <div className={`card lg:card-side bg-base-100 shadow-xl p-4 ${bgClass}`}>
         <figure>
            <img className="ml-4 sm:mt-4 " src={img} alt="Album" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
         </div>
   </div>
   );
};

export default InfoCard;
