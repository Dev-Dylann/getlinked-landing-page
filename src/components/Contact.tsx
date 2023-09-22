import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import MobileNav from './MobileNav'
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
        <header className='relative hidden'>
            <Header setIsNav={setIsNav} />
            <MobileNav isNav={isNav} setIsNav={setIsNav} />
        </header>

        <main className='p-12 flex flex-col relative'>

            {/* Lens Flare for background */}
            <div className='absolute -top-16 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-left-top bg-cover mix-blend-hard-light'></div>

            <button className='p-1 w-fit' onClick={() => navigate(-1)}>
                <img src={backIcon} alt="Back To Homepage" className='w-7' />
            </button>

            <article className='mt-10 w-[80%]'>
                <h2 className='text-pinkish text-xl font-bold font-clash'>Questions or need assistance?</h2>
                <h2 className='text-pinkish text-xl font-bold font-clash'>Let us know about it</h2>

                <p className='font-montserrat text-xs mt-6'>Email us below to any question related to our event</p>
            </article>

            <ContactForm />

            {/* Stars in the background */}
            <img src={pinkStar} alt="Star" className='absolute left-48 top-20 w-3' />
            <img src={grayStar} alt="Star" className='absolute right-16 top-40 w-4' />
            <img src={purpleStar} alt="Star" className='absolute left-12 bottom-16 w-3' />
            <img src={whiteStar} alt="Star" className='absolute right-6 bottom-40 w-3' />
        </main>

        <footer className='flex flex-col items-center gap-1 mb-10'>
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