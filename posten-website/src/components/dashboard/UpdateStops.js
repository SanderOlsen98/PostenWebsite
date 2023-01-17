import React from "react";
import MultipleParcels from "./parcels/MultipleParcels";

function UpdateStops() {
  return (
    <div className=" col-span-3 min-h-[90vh] border-gray-200 items-start justify-start flex w-full px-12 mt-24">
      {/* LeftCars */}
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6 ">
        <h1 className=" text-lg font-bold">Parcels Remaining</h1>
        <MultipleParcels />
      </div>
    </div>
  );
}

export default UpdateStops;
