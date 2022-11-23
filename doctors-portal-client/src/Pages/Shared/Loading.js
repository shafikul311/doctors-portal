import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
   return (
      <div className="grid justify-items-center mt-10">
         <BounceLoader
            color="#36d7b7"
         />
      </div>

   );
};

export default Loading;
