import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
   const [treatment, setTreatment] = useState(null);
   const formattedDate = format(date, "PP");

   // here is used React query for data fetch 
   const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
   fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
     res.json()
   )
 )

 if(isLoading){
   return <Loading></Loading>
 }
  
   return (
      <div>
         <h4 className="text-xl text-secondary text-center my-12">
            Available Appointment on {formattedDate}
         </h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services?.map((service) => (
               <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
            ))}
         </div>
         {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment}
            ></BookingModal>}

      </div>
   );
};

export default AvailableAppointment;
