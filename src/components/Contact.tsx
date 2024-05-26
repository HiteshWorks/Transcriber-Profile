import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Contact:React.FC = () => {
  // document.body.style.backgroundColor = 'green'

  const scrollToTop = ()=>{
   window.scrollTo({
    top:0,
    behavior: 'smooth'
   })
  }
  return (
    <>
      <div className="absolute w-full  text-9xl h-screen font-extrabold text-yellow-400 top-[278%]">


        <div className=" mt-16 ml-[31%] ">Say Hello!</div>


        <div className="anchors  w-full flex justify-center gap-[20%]">


        <a
        title="Mail me"
          className="contactme flex flex-col justify-center items-center mt-24"
          href="https://gmail.com"
          >
          <img
            className="h-56 w-56 rounded-[20px]"
            src="./src/assets/gmail.jpg"
            alt=""
            />
          <div className=" text-lg">
            {" "}
            <b className="text-sky-400">hitesh</b>
            <b className="text-red-400">pandey</b>
            <b className="text-yellow-400">442</b>
            <b className="text-green-400">@gmail.com</b>
          </div>
        </a>
        <a
          className="contactme flex flex-col  justify-center items-center mt-24"
          href="https://whatsapp.com"
          >
          <img
            className="h-56 w-56 rounded-[20px]"
            src="./src/assets/whatsapp.jpg"
            alt="whatsapp"
            title="Whatsapp Me"
            />
          <div className=" text-lg">
            {" "}
           
            <b className="text-green-400">7456<b className="text-white">96</b>9410</b>
          </div>
        </a>
        <a
        title="Call me"
          className="contactme flex flex-col justify-center items-center mt-24"
          href="https://truecaller.com"
          >
          <img
            className="h-56 w-56 rounded-[20px]"
            src="./src/assets/phone.jpg"
            alt=""
            />
          <div className=" text-lg">
            {" "}
           <b className="text-blue-300">+915962358239</b>
          </div>
        </a>

            </div>
            <div className="end flex flex-col gap-12 mt-[10%]">

 <button onClick={scrollToTop} className="btn  h-8 w-24  text-2xl font-extrabold flex mx-auto justify-center rounded-full px-4 p-1 text-white bg-sky-400 border-2 border-gray-300 "><FaCircleArrowUp /></button>

<div className="endBar w-full h-12  text-sm font-thin text-center text-white ">&copy; All Copyrights Reserved</div>       
            </div>
      </div>
    </>
  );
};

export default Contact;
