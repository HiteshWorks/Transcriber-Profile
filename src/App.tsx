import Navbar from "./components/Navbar"
import About from "./components/About"
import  AI from "./components/AI"
import MyWorks from "./components/MyWorks"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

function App() {
 
  document.body.style.backgroundColor ='black'
  document.body.style.color = 'white'
  

 

  return (
    <>
<Navbar />
<About />
<AI />
<MyWorks />
<Testimonials />
<Contact />
     </>
  )
}

export default App
