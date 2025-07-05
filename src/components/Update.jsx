import React from "react";
import { textsProp, imagesList } from "../constants/properties.js";

function Update() {
  let imageToShow = imagesList[3];

  return (
    <section className="mt-7">
      <div>
        <h1 className="font-roboto font-[900] text-3xl sm:text-5xl sm:mb-6 mb-3">{textsProp.heading}</h1>
        <p className="font-roboto text-[16px] sm:text-3xl sm:mb3.5 font-[400] mb-6">{textsProp.text}</p>
        <div>
          {textsProp.lists.map((item, index) => (
            <div key={index} className="flex gap-3 sm:gap-5 items-center mb-4">
              <img src={imageToShow} alt="check" className="self-baseline sm:w-[35px]" />
              <p className="font-roboto font-[400] sm:text-3xl sm:font-[600]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Update;
