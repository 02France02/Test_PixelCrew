import React, { useState, useEffect } from "react";
import img1 from "../assets/img carousel/Frame 21770.png";
import img2 from "../assets/img carousel/image 301.png";
import img3 from "../assets/img carousel/image 302.png";
import img4 from "../assets/img carousel/image 302 (1).png";
import img5 from "../assets/img carousel/image 302 (2).png";
import img6 from "../assets/img carousel/image 302.png";

const items = [
  {
    id: 1,
    title: "Mele di bosco",
    imgSrc: img1,
  },
  {
    id: 2,
    title: "Mele di bosco",
    imgSrc: img2,
  },
  {
    id: 3,
    title: "Mele di bosco",
    imgSrc: img3,
  },
  {
    id: 4,
    title: "Mele di bosco",
    imgSrc: img4,
  },
  {
    id: 5,
    title: "Mele di bosco",
    imgSrc: img5,
  },
  {
    id: 6,
    title: "Mele di bosco",
    imgSrc: img6,
  },
];

const BottegaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set the initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="text-center ">
      <div className="flex max-md:flex-col  justify-between p-16 ">
        <div className="w-full">
          <h2 className="text-2xl font-bold font-[800] mb-4">Le novità in bottega</h2>
          <div className="w-full flex justify-center">
            <p className="w-[50%] max-md:mb-10">
              Nella cucina professionale/ laboratorio multifunzionale
              (interamente alimentata a corrente) che è stata allestita
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 max-md:gap-[50%]">
          <button
            onClick={handlePrev}
            className="h-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="h-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className=" mr-10 p-3 flex-shrink-0 border border-solid shadow-sm rounded-2xl mb-10"
                style={{ flexBasis: `calc(100% / ${itemsToShow})` }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="rounded-lg w-full h-[200px]"
                />
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-xl mt-4">{item.title}</h3>
                  <button className="mt-4 bg-[#D1F864] text-black py-2 px-4 rounded-3xl">
                    Scopri di più {">"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottegaCarousel;
