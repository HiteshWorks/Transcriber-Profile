import React from 'react'

const MyWorks = () => {
  return (
    <>
    <div className='text-9xl absolute top-[102%] w-full '>
        
        <div className='heading ml-[30%] font-bold text-yellow-400'> MY WORKS</div>

        <div className="cards flex justify-between mt-[2%]  ml-8 w-[95%] h-[70vh]">



            <div className="card1 h-[90%] w-[40%] border-2 rounded-lg mt-6 shadow-md shadow-gray-500 border-sky-400">
              <a target='_blank' href="https://youtu.be/gZchzcul6wY?si=0PjflSFtrnVJThOT">
            <img className='object-fill h-full w-full' src="./src/assets/image2.webp " alt="" />

              </a>


            </div>

            <div className="card2 h-[90%] w-[40%] border-2 rounded-lg mt-6 shadow-md shadow-gray-500 border-sky-400">
            <video loop  controls className='h-full w-full object-fill' src="./src/assets/video1.mp4"></video>



            </div>
           
            <div className="card1 h-[90%] w-[40%] border-2 rounded-lg mt-6 shadow-md shadow-gray-500 border-sky-400">
              <a target='_blank' href="https://youtu.be/HMGEnWazfTE?si=fHZ22NJE-COiNik7">
            <img className='object-fill h-full w-full' src="./src/assets/image3.webp " alt="" />

              </a>
           
</div>


        </div>
        
        
       
       </div>
    </>
  )
}

export default MyWorks