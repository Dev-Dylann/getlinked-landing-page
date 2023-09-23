import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import ContactForm from './ContactForm'
import backIcon from '../assets/icons/back-icon.svg'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import whiteStar from '../assets/images/star-white.png'
import grayStar from '../assets/images/star-gray.png'
import pinkStar from '../assets/images/star-pinkish.png'
import purpleStar from '../assets/images/star-purplish.png'

const Contact = () => {
    const [isNav, setIsNav] = useState(false)

    const navigate = useNavigate()

  return (
    <>
        <header className='relative hidden lg:block'>
            <Header setIsNav={setIsNav} />
        </header>

        <main className='p-12 flex flex-col relative sm:px-16 md:px-20 lg:flex-row lg:gap-10 lg:items-center lg:px-20 lg:text-left xl:px-32 2xl:px-40 lg:overflow-x-none'>

            {/* Lens Flare for background */}
            <div className='absolute top-8 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-right bg-cover mix-blend-hard-light mask md:h-full lg:-top-32 lg:-left-[350px] lg:bg-left-top lg:max-w-2xl xl:-left-[200px]'></div>
            <div className='hidden lg:block absolute bottom-8 right-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-right bg-cover mix-blend-hard-light mask md:h-full lg:-bottom-32 lg:bg-left-top lg:max-w-2xl xl:left-[500px]'></div>

            <button className='p-1 w-fit lg:hidden' onClick={() => navigate(-1)}>
                <img src={backIcon} alt="Back To Homepage" className='w-7 md:w-10' />
            </button>

            <article className='mt-10 w-[80%] lg:hidden '>
                <h2 className='text-pinkish text-xl font-bold font-clash md:text-2xl'>Questions or need assistance?</h2>
                <h2 className='text-pinkish text-xl font-bold font-clash md:text-2xl'>Let us know about it</h2>

                <p className='font-montserrat text-xs mt-6 sm:text-sm'>Email us below to any question related to our event</p>
            </article>

            <section className='hidden lg:flex flex-col gap-4 lg:w-[40%] font-montserrat justify-center'>
                <h2 className='text-xl text-pinkish font-clash font-bold xl:text-2xl 2xl:text-3xl'>Get in touch</h2>
                <p>Contact Information</p>

                <address className='not-italic'>
                    27, Alara Street <br />
                    Yaba 100012 <br />
                    Lagos State
                </address>

                <p>Call Us : 07067981819</p>

                <p>we are open from Monday-Friday <br />
                08:00am - 05:00pm</p>

                <article className='hidden lg:flex flex-col gap-1 lg:gap-2'>
                    <p className='text-pinkish'>Share on</p>

                    <div className='flex gap-4 items-center'>
                        <img src={instagram} alt="Instagram" className='w-4 lg:w-6' />
                        <img src={x} alt="X" className='w-3 lg:w-5' />
                        <img src={facebook} alt="Facebook" className='w-2 lg:w-3' />
                        <img src={linkedin} alt="Linkedin" className='w-4 lg:w-6' />
                    </div>
                </article>
            </section>

            

            <ContactForm />

            {/* Stars in the background */}
            <img src={pinkStar} alt="Star" className='absolute left-48 top-20 w-3' />
            <img src={grayStar} alt="Star" className='absolute right-16 top-40 w-4' />
            <img src={purpleStar} alt="Star" className='absolute left-12 bottom-16 w-3' />
            <img src={whiteStar} alt="Star" className='absolute right-6 bottom-40 w-3' />

        </main>

        <footer className='flex flex-col items-center gap-1 mb-10 lg:hidden'>
            <p className='text-pinkish text-xs'>Share on</p>

            <div className='flex gap-4 items-center'>
                <img src={instagram} alt="Instagram" className='w-4' />
                <img src={x} alt="X" className='w-3' />
                <img src={facebook} alt="Facebook" className='w-2' />
                <img src={linkedin} alt="Linkedin" className='w-4' />
            </div>
        </footer>
    </>
  )
}

export default Contact