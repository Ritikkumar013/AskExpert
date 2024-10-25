import React, { useState } from "react";

const Mobile = () => {
  const [currentImage, setCurrentImage] = useState("/Mobile1.png");

  //Fucntion to handle image change
  const handleImgChange = (imagePath: string) => {
    setCurrentImage(imagePath);
  };

  return (
    <div className="bg-[#f7f7f7] my-16 py-10">
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center">
          Amplifying Business{" "}
          <span className="text-[#dc143c]">Impact with AI</span> at Each Step
        </h1>
        <p className="text-center">Delivering measurable outcomes</p>
      </div>

      {/* Step 1 top left */}
      <div className="flex  py-10">

        <div className="basis-1/3 flex flex-col justify-between px-32">
        <div className="p-5">
            <button
            onClick={() => handleImgChange("/Mobile1.png")}
            className="bg-white rounded-xl" 
          >
            <div className="text-2xl text-red-600 font-bold">1</div>
            <h2 className="text-xl font-semibold">Step1:</h2>
            <p className="text-sm">
              Dedicate of experience AI and building custom models. Our domain
              expertise span across
            </p>
          </button></div>
          
          {/* Step 3 bottom left */}
          <div className="p-5">
            <button
            onClick={() => handleImgChange("/Mobile.png")}
            className="bg-white rounded-xl"
          >
            <div className="text-2xl text-red-600 font-bold">3</div>
            <h2 className="text-xl font-semibold">Step1:</h2>
            <p className="text-sm">
              Dedicate of experience AI and building custom models. Our domain
              expertise span across
            </p>
          </button></div>
          
        </div>

        {/* Mobile display */}
        <div className="basis-1/3">
          <div className="col-span-1 row-span-3 flex justify-center items-center">
            <img src={currentImage} alt="MobileMockup w-72 h-auto" />
          </div>
        </div>
 
 {/* Step 2 top right */}
 
        <div className="basis-1/3 flex flex-col justify-between px-32">      
          <div className="p-5">
            <button
              onClick={() => handleImgChange("/Mobile.png")}
              className="bg-white rounded-xl"
            >
              <div className="text-2xl text-red-600 font-bold">2</div>
              <h2 className="text-xl font-semibold">Step1 :</h2>
              <p className="text-sm">
                Dedicate of experience AI and building custom models. Our domain
                expertise span across
              </p>
            </button>
          </div>

          {/* Step 4 bottom right */}
          <div className="p-5">
            <button
              onClick={() => handleImgChange("/Mobile.png")}
              className="bg-white rounded-xl"
            >
              <div className="text-2xl text-red-600 font-bold">4</div>
              <h2 className="text-xl font-semibold">Step1:</h2>
              <p className="text-sm">
                Dedicate of experience AI and building custom models. Our domain
                expertise span across
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
