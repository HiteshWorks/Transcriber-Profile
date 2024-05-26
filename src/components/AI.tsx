import React, { useEffect, useState } from "react";

const AI: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <div className="text-7xl mt-4 text-yellow-400 font-extrabold flex justify-center">
        WHY US OVER AI?
      </div>

      {/* <div className="cards">
     {Array(3).map((_ , index)=> (
         <div className='w-[30%] h-[20%] border-2 border-gray-500 text-white' key={index}>card</div>
        ))}
        </div> */}

      <div className="cards flex mx-auto h-[80rem] w-[95vw] justify-between mt-10">
        <div
          className={`card1 ${
            count == 0 && `bg-red-700 scale-110`
          }  hover:scale-110 transition-all duration-200 w-[30%] h-[20%] border-2 shadow-lg shadow-gray-400 rounded-lg  font-bold text-4xl text-yellow-200 border-gray-500`}
        >
          <div className="heading flex  justify-center">ACCURACY</div>
          <div className="para font-extralight text-xl mt-12 w-[80%] flex mx-[4rem]">
            You will get 100% accurate captions with general understanding
            packed,AI fails accuracy when captioning. "Better Captioning Better
            Reach"
          </div>
        </div>
        <div
          className={`card2  ${
            count == 1 && `bg-red-700 scale-110` } hover:scale-110 transition-all duration-200 w-[30%] h-[20%] border-2 shadow-lg shadow-gray-400  rounded-lg  font-bold text-4xl text-yellow-200 border-gray-500`}
        >
          <div className="heading flex justify-center">INTERPRETATION</div>
          <div className="para font-extralight text-xl mt-12 w-[80%] flex mx-[4rem]">
            We Check the captions thrice, so that we ensure there remains no
            error and SEO goes boom, whereas AI misinterpret plenty of words!
          </div>
        </div>
        <div className={`card3  ${
            count == 2 && `bg-red-700 scale-110`} hover:scale-110 transition-all duration-200 w-[30%] h-[20%] border-2 shadow-lg shadow-gray-400  rounded-lg  font-bold text-4xl text-yellow-200 border-gray-500 `}>
          <div className="heading flex justify-center">SYNC</div>
          <div className="para font-extralight text-xl mt-12 w-[80%] flex mx-[4rem]">
            Don't worry, the captions with the video will be synced perfectly
            with the speech delivered in the Video, The moment Speaker starts
            speaking,the captions will sync!
          </div>
        </div>
      
      </div>
    </>
  );
};

export default AI;
