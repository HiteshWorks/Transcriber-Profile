import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const paraArray = [
    "I AM HITESH PANDEY, I AM A TRANSCRIBER, I HAVE TWO YEARS OF EXPERIENCE OVER THIS FIELD, I HAVE WORKED AND STILL WORKING WITH GREAT DEDICATION, WHICH MAKES ME A PERFECT SUBTITLE EDITOR WITH HIGHEST ACCURACY ACHIEVED.",
    `AI IN THE TIMES ALSO ISN'T CAPABLE OF PROVIDING ACCURATE CAPTIONS TILL DATE. SINCE WE CHECK THE VIDEO THRICE BEFORE PUBLISHING, IT LEAVES US WITH NEGLIGIBLE ERRORS IN OUR WORK!`,
    `CONTACT US RIGHT AWAY AND BOOST YOUR CHANNEL'S GROWTH AND SEO (Search Engine Optimization) ALONG WITH US! EMAIL ME AT HITESHPANDEY442@GMAIL.COM`,
  ];

  const [paragraph, setParagraph] = useState(paraArray[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % paraArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setParagraph(paraArray[count]);
  }, [count, paraArray]);

  return (
    <>
    
    <div className="aboutSection w-[98%] flex mx-4 justify-around items-center h-[20rem] border-4 rounded-lg mt-10 border-gray-700">
      <div className="dots relative top-[-50%] left-[43%] flex gap-0 text-9xl">
        <span className={`dot1   ${count==0 ? `text-gray-400` : `text-white`}  `}>.</span> <span className={`dot2 ${count == 1 ? `text-gray-400` : `text-white`} `}>.</span>{" "}
        <span className={`dot3 ${count==2 && `text-gray-400`}`}>.</span>
      </div>

      <img
        className="w-[10%] h-[50%] mr-[6%] hover:border-4 hover:border-white transition-all duration-100 rounded-full"
        src="./src/assets/myPic.jpeg"
        alt=""
      />

      <div className={`w-[40%] mainAbout font-extrabold shadow-lg shadow-gray-500 bg-gray-200 rounded-xl p-3 ${count==0 ? `text-red-500` :count==1 ? `text-pink-600` : `text-purple-600`} font-bold mr-[15%]`}>{paragraph}</div>

      <img
        className="h-[50%] w-[10%] rounded-full relative right-[2%]"
        src="./src/assets/th.jpg"
        alt=""
      />
    </div>
    
    </>
  );
};

export default About;
