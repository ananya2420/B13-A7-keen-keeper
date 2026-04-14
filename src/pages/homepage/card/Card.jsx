import React from "react";

const Card = () => {
  return (
    <div className="w-full px-6 py-10">
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Total Friends */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-3xl font-bold text-black mt-2">10</p>
          <h2 className="text-gray-500 text-sm">Total Friends</h2>
        </div>

        {/* On Track */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-3xl font-bold text-black mt-2">3</p>
           <h2 className="text-gray-500 text-sm">On Track</h2>
        </div>

        {/* Need Attention */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-3xl font-bold text-black mt-2">6</p>
           <h2 className="text-gray-500 text-sm">Need Attention</h2>
        </div>

        {/* Interactions This Month */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-3xl font-bold text-black mt-2">12</p>
               <h2 className="text-gray-500 text-sm">Interactions This Month</h2>
        </div>

      </div>
    </div>
  );
};

export default Card;