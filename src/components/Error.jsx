import React from "react";

export default function Error({children}) {
   return (
      <div className="bg-red-100 p-3 text-red-700 text-center mb-5">
         {children}
      </div>
   );
}
