import React from "react";

import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
   return (
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white -mt-8">
         <InfoCard
            cardTitle="Opening Hours"
            bgClass="bg-gradient-to-r from-secondary to-primary"
            img={clock}
         ></InfoCard>
         <InfoCard
            cardTitle="Our Locations"
            bgClass="bg-accent"
            img={marker}
         ></InfoCard>
         <InfoCard
            cardTitle="Contact Us"
            bgClass="bg-gradient-to-r from-secondary to-primary"
            img={phone}
         ></InfoCard>
      </div>
   );
};

export default Info;
