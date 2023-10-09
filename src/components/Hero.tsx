import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import lensFlareMobile from '../assets/images/purple-lens-flare-mobile.svg'
import lensFlare from '../assets/images/purple-lens-flare.svg'
import curvedLine from '../assets/icons/curve-line.svg'
import chain from '../assets/images/chain.svg'
import bang from '../assets/images/bang.svg'
import globe from '../assets/images/globe.svg'
import hackathonGuy from '../assets/images/hackathon-guy.svg'

const Hero = () => {
    const typingRef = useRef<HTMLHeadingElement>(null)

    /* useEffect(() => {
        typingRef.current!.textContent = ''

        const textToType = 'Igniting a Revolution in HR Innovation'
        const splitted = textToType.split('')
        console.log(splitted)

        let i: number = 0
        setInterval(() => { 
            if (i < textToType.length) {
                typingRef.current!.textContent += splitted[i]
                i++;
            }
        }, 100)
    }, []) */

  return (
    
    <section className='relative flex flex-col items-center py-8 lg:grid lg:grid-cols-2 lg:border-b lg:border-gray-700 lg:pb-0'>
        {/* Lens Flare Image for background */}
        <img src={screen.width < 1024 ? lensFlareMobile : lensFlare} alt="Background Image" className='mask-mobile mix-blend-hard-light absolute -top-16 left-0 w-full h-auto -z-[10] md:-top-28 lg:-left-16 lg:mask-desktop lg:w-4/5' />

        <h3 ref={typingRef} className='font-montserrat text-center font-bold italic relative sm:text-lg lg:col-span-full lg:text-right lg:text-xl lg:mx-12 xl:text-2xl xl:mx-20 2xl:text-3xl 2xl:mx-32'>
            Igniting a Revolution in HR Innovation
            <img src={curvedLine} alt="Curved Line" className='absolute -bottom-[11px] right-2 w-[117px] stroke-[3]' />
        </h3>

        <article className='flex flex-col items-center text-center font-bold mt-12 lg:mt-0 lg:text-left lg:items-start lg:pl-12 xl:pl-20 2xl:pl-32'>
            <h2 className='text-[32px] leading-normal font-clash sm:text-4xl lg:text-5xl xl:text-[60px] 2xl:text-[70px]'>getlinked Tech </h2>
            <h2 className='text-[32px] leading-[34px] font-clash sm:text-4xl lg:text-5xl xl:text-[60px] 2xl:text-[70px]'>
                Hackathon
                <span className='text-pinkish'> 1.0</span>
                <img src={chain} alt="Chain" width='32' height='32' className='inline lg:w-12 lg:h-12 xl:h-16 xl:w-16' />
                <img src={bang} alt="Bang" width='22' height='22' className='inline lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            </h2>

            <p className='text-[13px] leading-[21.58px] mt-[9px] font-montserrat mx-[63px] sm:text-base lg:mx-0 xl:text-lg'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

            <Link to={'register'} className='text-sm font-montserrat gradient py-4 px-12 mt-6 rounded-[4px] sm:text-base'>Register</Link>

            <div className='font-unica text-5xl flex gap-4 py-4 mt-4'>
                <p>00<span className='font-montserrat text-sm'>H</span></p>
                <p>00<span className='font-montserrat text-sm'>M</span></p>
                <p>00<span className='font-montserrat text-sm'>S</span></p>
            </div>
        </article>

        <article className='mt-4 w-full relative'>
            <div className='w-full'>
                <img src={hackathonGuy} alt="Hackathon Guy" className=' w-full mix-blend-luminosity md:max-w-[400px] inset-0 mx-auto lg:w-full lg:inset-1 lg:right-0 lg:max-w-[650px]' />
            </div>

            <div className='w-full bg-[lightgray] bg-opacity-50 '>
                <img src={globe} alt="Globe" className='absolute w-[85%] top-0 left-8 mix-blend-hard-light md:max-w-[400px] inset-0 mx-auto md:top-6 lg:max-w-none' />
            </div>
        </article>
    </section>
  )
}

export default Hero