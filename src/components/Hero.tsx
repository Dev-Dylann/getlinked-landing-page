import { Link } from 'react-router-dom'
import curvedLine from '../assets/icons/curve-line.svg'
import chain from '../assets/images/chain.png'
import bang from '../assets/images/bang.png'
import globe from '../assets/images/globe.png'
import hackathonGuy from '../assets/images/hackathon-guy.png'

const Hero = () => {
  return (
    
    <section className='relative flex flex-col items-center py-8 lg:grid lg:grid-cols-2'>
        {/* Lens Flare Image for background */}
        <div className='absolute -top-20 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light sm:bg-center sm:h-screen sm:-top-36'></div>

        <h3 className='font-montserrat text-center font-bold italic relative sm:text-lg lg:col-span-full lg:text-right lg:text-xl lg:mx-12 xl:text-2xl xl:mx-20 2xl:text-4xl 2xl:mx-32'>
            Igniting a Revolution in HR Innovation
            <img src={curvedLine} alt="Curved Line" className='absolute -bottom-[11px] right-2 w-[117px] stroke-[3]' />
        </h3>

        <article className='flex flex-col items-center text-center font-bold mt-12 lg:mt-0 lg:text-left lg:items-start lg:px-12 xl:px-20 2xl:px-32'>
            <h2 className='text-[32px] leading-normal font-clash sm:text-4xl'>getlinked Tech </h2>
            <h2 className='text-[32px] leading-[34px] font-clash sm:text-4xl'>
                Hackathon
                <span className='text-pinkish'> 1.0</span>
                <img src={chain} alt="Chain" width='32' height='32' className='inline' />
                <img src={bang} alt="Bang" width='22' height='22' className='inline' />
            </h2>

            <p className='text-[13px] leading-[21.58px] mt-[9px] font-montserrat mx-[63px] sm:text-base lg:mx-0'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

            <Link to={'register'} className='text-sm font-montserrat gradient py-4 px-12 mt-6 rounded-[4px] sm:text-base'>Register</Link>

            <div className='font-unica text-5xl flex gap-4 py-4 mt-4'>
                <p>00<span className='font-montserrat text-sm'>H</span></p>
                <p>00<span className='font-montserrat text-sm'>M</span></p>
                <p>00<span className='font-montserrat text-sm'>S</span></p>
            </div>
        </article>

        <article className='mt-4 w-full h-[50vh] max-h-[450px] relative lg:h-[60vh] border'>
            <div className='w-full bg-[lightgray] bg-opacity-50 relative'>
                <img src={hackathonGuy} alt="Hackathon Guy" className='absolute w-full mix-blend-luminosity lg:w-fit' />
            </div>

            <div className='w-full bg-[lightgray] bg-opacity-50 '>
                <img src={globe} alt="Globe" className='absolute w-[85%] top-0 left-8 mix-blend-hard-light' />
            </div>
        </article>
    </section>
  )
}

export default Hero