import React from "react";
import BodyComponent from "./BodyComponent";
import LeftBarComponent from "./LeftBarComponent";
import RightBarClomponent from "./RightBarClomponent";

export default function MainComponent({dataTrip, setDataTrip} ) {
  return (
    <div class="bg-white">
      <div class="grid grid-cols-12">
        <div class="  col-span-1 ">
          <LeftBarComponent />
        </div>
        <div class="col-span-8">
          <BodyComponent dataTrip = {dataTrip}  setDataTrip = {setDataTrip} />
        </div>
        <div class="col-span-3 bg-bgCamping w-full bg-no-repeat bg-cover overflow-hidden sticky top-0 h-screen">
          <RightBarClomponent />
        </div>
      </div>
    </div>
  );
}
