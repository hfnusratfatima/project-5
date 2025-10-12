import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState();
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={i}
                className={`rounded-full w-3 h-3 cursor-pointer ${
                  i == current ? "bg-blue-700" : "bg-blue-100"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <button className="border-blue-700">Next</button>
    </div>
  );
}
