import React from "react";

const Service = ({ service, setTreatment }) => {
   const { name, slots, price } = service;
   return (
      <div className="card w-lg bg-base-100 shadow-xl">
         <div className="card-body">
            <h2 className="card-title text-xl font-bold text-secondary">
               {name}
            </h2>            
            <p className=" text-xs">
               {slots.length ? (
                  <span> {slots[0]}</span>
               ) : (
                  <span className="text-red-500">Please try another date</span>
               )}
            </p>
            <p className="uppercase text-xs">
               {" "}
               {slots.length}{" "}
               {slots.length ? (
                  <span>Spaces available</span>
               ) : (
                  <span className="text-red-500">Space available</span>
               )}
            </p>
            <p className="card-title text-sm font-bold text-secondary">
               <small className="font-md">${price}</small>
            </p>
            <div className="card-actions justify-center">
            <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
            </div>
         </div>
      </div>
   );
};

export default Service;
