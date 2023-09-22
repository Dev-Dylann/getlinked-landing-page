import { useState, useEffect } from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import SuccessScreen from './SuccessScreen'
import RegistrationForm from './RegistrationForm'
import registerImg from '../assets/images/register-image.png'
import movement1 from '../assets/images/movement1.png'
import movement2 from '../assets/images/movement2.png'
import pinkStar from '../assets/images/star-pinkish.png'
import purpleStar from '../assets/images/star-purplish.png'
import grayStar from '../assets/images/star-gray.png'

const Register = () => {
    const [isNav, setIsNav] = useState(false)
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

    useEffect(() => {
        if (isSuccess !== null && !isSuccess) {
            alert('Something went wrong.\nPlease try again')
        }
    }, [isSuccess])

  return (
    <>
        <header className='relative hidden'>
            <Header setIsNav={setIsNav} />
            <MobileNav isNav={isNav} setIsNav={setIsNav} />
        </header>

        <main className='p-12 flex flex-col gap-12 items-center relative'>
             {/* Lens Flare for background */}
             <div className='absolute -top-4 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light'></div>

            <h2 className='text-pinkish font-bold font-clash text-xl w-full '>Register</h2>

            <img src={registerImg} alt="Register" />

            <section className='grid grid-cols-[auto_80px] gap-y-1 gap-x-4 font-montserrat'>
                <p className='text-xs self-end shrink-0'>Be part of this movement</p>

                <article className='shrink flex justify-center w-full border-b border-dashed border-pinkish'>
                    <img src={movement1} alt="Movement" />
                    <img src={movement2} alt="Movement" />
                </article>

                <p className='text-xl col-span-full font-bold place-self-center'>CREATE YOUR ACCOUNT</p>
            </section>

            <RegistrationForm setIsSuccess={setIsSuccess} />

            {isSuccess && (
                <section className='fixed top-0 left-0 w-full h-screen grid place-content-center px-10 bg-purplish-dark bg-opacity-95'>
                    <SuccessScreen />
                </section>
            )}

             {/* Stars in the background */}
             <img src={pinkStar} alt="Star" className='absolute right-16 top-48 w-3' />
            <img src={grayStar} alt="Star" className='absolute left-6 top-[450px] w-4' />
            <img src={purpleStar} alt="Star" className='absolute right-8 bottom-60 w-2' />
        </main>
    </>
  )
}

export default Register