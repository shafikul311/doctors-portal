import React from "react";

const PrimaryButton = ({children}) => {
   return (
      <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-primary to-secondary font-bold ">
         {children}
      </button>
   );
};

export default PrimaryButton;
