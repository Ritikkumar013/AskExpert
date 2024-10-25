"use client"; 
import servicesData from "@/assets/Assets";
import { useParams } from "next/navigation"; // Import useParams from next/navigation

const ServicePage = () => {
  const params = useParams(); // Use useParams to get dynamic route parameters
  const serviceId = params.serviceId; // Extract serviceId from params

  // If serviceId is not a valid key in servicesData, handle 404 or show a default message.
  const serviceContent = servicesData[serviceId as string];

  if (!serviceContent) {
    return (
      <div className="text-center mt-8 text-red-500">Service not found!</div>
    );
  }

  return (
    <>
      {/* Section 1 */}
      <div className='w-full h-[70vh] flex items-center bg-[url("/4.jpg")] bg-cover bg-center lg:h-[80vh]'>
        <div className="container flex flex-col items-start max-w-[1280px] mx-auto gap-[10px] text-white md:px-10 lg:mb-[-80px]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {serviceContent[0].heading}
          </h1>
        </div>
      </div>

      {/* Section 2*/}
      <div className="py-14">
        <div className="max-w-screen-xl container mx-auto md:px-10">
          <div className="flex mb-8 gap-8">
            <div className="basis-3/4 pr-14">
              <h2 className="text-4xl mb-4 leading-10">
                {serviceContent[1].heading}
              </h2>
              <p className="text-sm">{serviceContent[1].content}</p>
            </div>
            <div className="basis-1/4">
              <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
                className="bg-transparent"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Section 3*/}
      <div className="py-14">
        <div className="max-w-screen-xl container mx-auto md:px-10">
          <div className="">
            <div className="">
              <h1 className="text-black text-4xl mb-2">
                {serviceContent[2].title}
              </h1>
              <p className="text-black mb-4 max-w-[600px] text-sm">
                {serviceContent[2].content}
              </p>
              <button
                type="button"
                className="btn btn-light rounded-pill px-5 py-2"
              >
                {serviceContent[2].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-14 mt-10">
        <div className="max-w-screen-xl container mx-auto md:px-10">
          <div className="flex gap-5">
            <div className="basis-1/2">
              <img
                src={serviceContent[3].image}
                className="w-[500px] rounded-xl"
              />
            </div>
            <div className="basis-1/2">
              <h3 className=" text-3xl mb-3 mt-2">{serviceContent[3].title}</h3>
              <p className="text-md mb-3">{serviceContent[3].content}</p>
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="py-14">
        <div className="max-w-screen-xl container mx-auto md:px-10">
          <div className="flex gap-5">
            <div className="basis-1/2 pr-4">
              <h3 className="text-3xl mb-3 mt-2">{serviceContent[4].title}</h3>
              <p className="text-md mb-3">{serviceContent[4].content}</p>
              <p className="underline underline-offset-4 text-sm font-bold">
                <a className="text-black" href="#">
                  Learn More
                </a>
              </p>
            </div>
            <div className="basis-1/2">
              <img src="/4.jpg" className="w-[500px] ml-auto rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="py-14 bg-white">
        <div className="max-w-screen-xl container mx-auto md:px-10 text-center">
          <h2 className="text-3xl text-[#0D0D0D] pb-3 text-center">
            {serviceContent[5].title}
          </h2>
          <p className="text-xs text-[#626262] max-w-[400px] mx-auto text-center mb-5">
            {serviceContent[5].intro}
          </p>
          <div className="flex gap-5 mb-4 text-left">
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              <img src={serviceContent[5]?.reads?.[0].image} className="rounded-t-lg roun-r-lg" />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[0].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                  {serviceContent[5]?.reads?.[0].content}
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              <img src={serviceContent[5]?.reads?.[1].image} className="rounded-t-lg roun-r-lg" />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[1].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                {serviceContent[5]?.reads?.[1].content}
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
            <div className="basis-1/3 border bg-gray-100 rounded-lg">
              <img src={serviceContent[5]?.reads?.[2].image} className="rounded-t-lg roun-r-lg" />
              <div className="p-3 flex flex-col gap-2 pb-4">
                <h5 className="text-lg">{serviceContent[5]?.reads?.[2].title}</h5>
                <p className="text-sm mb-2 text-gray-600">
                {serviceContent[5]?.reads?.[2].content}
                </p>
                <p className="text-xs">
                  <a
                    className="underline-offset-2 underline text-black font-bold"
                    href="#"
                  >
                    See our leadership
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#0D0D0D] text-[#FFFFFF] text-[13px] rounded-[25px] py-[12px] px-5 my-5 mx-auto">
            Read All!
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
