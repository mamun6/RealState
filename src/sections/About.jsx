import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

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
        <section id='about' className={`${darkMode ? 'dark bg-blcak' : 'light bg-transparent'} 
   w-full m-auto lg:px-40 px-10 py-20 grid lg-grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
            <div>
                <img data-aos="zoom-in" src={aboutimg} alt="about-img"
                    className='rounded-2xl lg:h-[600px]' />
            </div >
            <div className='flex flex-col justify-center items-start gap-8' >
                <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'  >
                    About Our Company  </h1>
                <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px]
                font-semibold leading-10 dark:text-white' > Meet our company people </h1>
                <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 
                dark:text-white text-justify' >
                    A real estate company that specializes in buying, selling, and renting properties.
                    They have a large experience in the housing market and offer a transparent process
                    with direct communication with clients.
                </p>
                <button className="bg-red-600 dark:bg-red-700 hover:bg-black
                 dark:hover:bg-white dark:hovertext-blank text-lg p-4 
                 text-white font-semibold rounded-xl cursor-pointer transfrom 
                 hover:scaler-110 transition-transform duration-300">
                    Read more..
                </button>
            </div>
        </section>
    )
}

export default About
