import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaBuilding, FaFacebookF, FaFax, FaInstagram, FaMobile, FaTwitch, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {

   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
  
      });
    }, [])
  
  
    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
   <>
    <footer className={`${darkMode ? 'dark bg-blcak' : 'light bg-gray-800'} w-full
    m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center 
    items-start lg:gap-20 gap-10` } >
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className='text-white text-2xl font-semibold'>About us</h1>
        <p className='text-slate-200 text-justify'>We offer a unique combination of advanced technology,
           comprehensive support, and exclusive benefits—making us 
           the ideal choice for real estate professionals looking to grow 
           their business.</p>
           <div className="flex justify-start items-center gap-4 mt-4 ">
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:sclae-110 transition-transform duration-300">
              <FaFacebookF className='size-5' />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:sclae-110 transition-transform duration-300">
              <FaTwitch className='size-5' />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:sclae-110 transition-transform duration-300">
              <FaYoutube className='size-5' />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:sclae-110 transition-transform duration-300">
              <FaInstagram className='size-5' />
            </div>
           </div>
           <h1 className='text-white mt-8' >Copyright Real Estate, All right and Reserved @ M-teach</h1>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className='text-white text-2xl font-semibold' >Contact us</h1>
        <div className="felx justify-content items-center gap-3">
            <FaBuilding className='text-whtie size=5' />
            <p className='text-slate-200' > Banani super market, Bonani bazar, Dhaka</p>
        </div>
        <div className="felx justify-content items-center gap-3">
            <FaMobile className='text-whtie size=5' />
            <p className='text-slate-200' > +8801892363609</p>
        </div>
        <div className="felx justify-content items-center gap-3">
            <FaFax className='text-whtie size=5' />
            <p className='text-slate-200' > +996645210</p>
        </div>
        <div className="felx justify-content items-center gap-3">
            <MdEmail className='text-whtie size=5' />
            <p className='text-slate-200' > mamunmip973@gmail.com </p>
        </div>
      </div>

        
      
    </footer>
   </>
  )
}

export default Footer
