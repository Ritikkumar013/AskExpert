import { useState } from "react";
import Image from "next/image";

const tabData = [
  { title: "Printer Troubleshooting", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.", image: "/image-demo.png" },
  { title: "Windows Issues", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.", image: "/1.jpg" },
  { title: "Outlook PST File Support", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.", image: "/3.jpg" },
  { title: "Television Setup", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.", image: "/image-demo.png" },
  { title: "Home Appliances Support", content: "Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.", image: "/image-demo.png" },
];

const TabbedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, tabData.length - 4));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const displayedTabs = tabData.slice(currentIndex, currentIndex + 4);

  const handleTabSelect = (index: number) => {
    const newSelectedIndex = currentIndex + index;
    setSelectedTabIndex(newSelectedIndex);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Carousel Controls */}
      <div className="relative py-4 border-b border-t">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFE6E6] py-2 px-3 rounded-full z-10 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        {/* Tabs (Carousel) */}
        <div className="flex justify-around overflow-hidden space-x-8 px-4 sm:px-12">
          {displayedTabs.map((tab, index) => (
            <div
              key={index}
              className="tab p-4 bg-[#ff000010] text-[#FF0000] font-[500] rounded-md w-full text-center cursor-pointer"
              onClick={() => handleTabSelect(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFE6E6] py-2 px-3 font-bold rounded-full z-10 disabled:opacity-50"
          disabled={currentIndex >= tabData.length - 4}
        >
          &gt;
        </button>
      </div>

      {/* Tab Content */}
      <div id="tabContent" className="mt-6 p-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center">
          <div className="flex-shrink-0 md:basis-5/12">
            <Image
              className="ml-auto rounded-r-2xl"
              src={tabData[selectedTabIndex].image}
              width={500}
              height={336}
              alt=""
            />
          </div>
          <div className="md:basis-7/12">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4">
              {tabData[selectedTabIndex].title}
            </h2>
            <p className="text-sm sm:text-base">{tabData[selectedTabIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedCarousel;
