import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
   const [services, setServices] = useState([]);
   const [treatment, setTreatment] = useState(null);
   const formattedDate = format(date, "PP");

   useEffect(() => {
      fetch("services.json")
         .then((response) => response.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <div>
         <h4 className="text-xl text-secondary text-center my-12">
            Available Appointment on {formattedDate}
         </h4>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
               <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
            ))}
         </div>
         {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}

      </div>
   );
};

export default AvailableAppointment;
