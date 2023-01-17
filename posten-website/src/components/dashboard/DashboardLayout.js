import React from "react";

import Drivers from "./drivers/Drivers";

import UpdateStops from "./UpdateStops";

function DasgboardLayout() {
  return (
    <>
      <div className=" grid grid-cols-1 xl:grid-cols-5 w-full col-span-10 mt-26">
        <Drivers />
        <UpdateStops />
      </div>
    </>
  );
}

export default DasgboardLayout;
