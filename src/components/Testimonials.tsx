import React from "react";

const Testimonials:React.FC = () => {
  return (
    <div className="absolute h-screen top-[190%] text-9xl">
      <div className=" text-yellow-400 font-extrabold ml-[22%]">
        TESTIMONIALS
      </div>

      <div className="person mt-28 flex flex-col gap-3 items-center justify-center">
        <strong className="text-5xl"><b className="text-purple-400">Anurag</b> <b className="text-pink-600">Singh</b></strong>
        <div className="text-4xl">
          {" "}
          <b className="text-6xl text-red-400">
            You<strong className="text-white text-6xl">Tuber |</strong>
          </b>
          <b className="text-3xl">

          Founder of <b className="text-purple-400 text-4xl">@Pro</b><b/><b className="text-pink-400 text-4xl">codrr</b> <b className="text-6xl">|</b> <i className="text-4xl text-orange-400">Software Engineer</i> at <b className="text-blue-400">Digit Insurance</b>,
          <b className="text-red-300">Bangalore</b>
          
          </b>
        </div>
      </div>

      <div className="section flex flex-col items-center justify-center mt-24 gap-36">
        <div className="flex gap-8 justify-center">
          <img
            className="h-28 w-28 rounded-full"
            src="./src/assets/anurag.jpg"
            alt=""
          />
          <p className="text-lg w-[45%] font-bold ">
            I have worked with Hitesh, he did Subtitles in my{" "}
            <b className="text-sky-300 text-xl">FrontEnd BootCamp Course</b>,
            his work is{" "}
            <b className="text-purple-400 text-xl">Full of Perfection.</b> The
            Level of Captions done is way far better than that of Artificial
            Intelligence, Even though the videos were extremely long, still the
            accuracy achieved by him is Phenomenal! He is a permanent{" "}
            <b className="text-red-400 text-xl">Subtitle Editor</b> for my
            YouTube Channel, because he never messed up the work!
          </p>
        </div>
      </div>

      <div className="w-full h-14 bar mt-32"></div>
    </div>
  );
};

export default Testimonials;
