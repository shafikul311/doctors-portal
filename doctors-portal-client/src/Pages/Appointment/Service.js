import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service}) => {

    const { name , slots } = service
    return (
        <div class="card w-lg bg-base-100 shadow-xl">
               <div class="card-body">
                  <h2 class="card-title text-xl font-bold text-secondary">{name}</h2>
                  <p className="uppercase"> {slots.length} {slots.length ? <span className="">spaces available</span>: <span className="text-red-500">space available</span> }</p>
                  <div class="card-actions justify-center">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                  </div>
               </div>
            </div>
    );
};

export default Service;