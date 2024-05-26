import React from 'react'

const Navbar:React.FC = () => {

function HomeClick(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
function ContactClick(){
  window.scrollTo({
    top:2750,
    behavior:'smooth'
  })
}
function TestimonyClick(){
  window.scrollTo({
    top:1500,
    behavior:'smooth'
  })
}
function WorksClick(){
  window.scrollTo({
    top:750,
    behavior:'smooth'
  })
}


  return (
    <>
    <main className='sticky top-0 z-40'>
     <div className='bg-sky-300 w-full h-10 flex justify-between'>
          <div className='logo'>
            <img className="logoimg w-10 h-10 ml-2 hover:border-4 hover:border-white rounded-3xl" src="./src/assets/logo.jpg" alt="logo image" />
          </div>


          <ul className='tabs flex gap-10 justify-center items-center mr-3'>
    <li onClick={HomeClick} className='bg-white text-md font-bold text-sky-900 hover:scale-105 cursor-pointer px-2 rounded-2xl'>HOME</li>
    <li onClick={ContactClick} className='bg-white text-md font-bold text-sky-900 hover:scale-105 cursor-pointer px-2 rounded-2xl'>CONTACT ME</li>
    <li onClick={TestimonyClick} className='bg-white text-md font-bold text-sky-900 hover:scale-105 cursor-pointer px-2 rounded-2xl'>TESTIMONIALS</li>
    <li  onClick={WorksClick} className='bg-white text-md font-bold text-sky-900 hover:scale-105 cursor-pointer px-2 rounded-2xl'>WORKS</li>
          </ul>

     </div>


    </main>
    
<div className='  right-[39vw]  rounded-lg px-1 z-50 fixed top-0 shadow-sm shadow-slate-400 font-bold  text-yellow-200 text-4xl flex  items-center border-2 border-gray-400 bg-orange-400'>Get Your Captions Done!</div>

    </>
  )
}

export default Navbar