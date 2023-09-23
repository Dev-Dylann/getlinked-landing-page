import { Link } from 'react-router-dom'
import navClose from '../assets/icons/nav-close-icon.svg'
import gradientRing from '../assets/icons/gradient-ring.svg'

type MobileNavProps = {
    isNav: boolean,
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const MobileNav = ({isNav, setIsNav}: MobileNavProps) => {
  return (
    <aside className='fixed top-0 right-0 w-full h-full px-12 py-12 flex flex-col gap-10 bg-[#150E28] translate-x-full transition-all duration-500 z-10 sm:w-1/2 lg:hidden' style={isNav ? {transform: "translateX(0)"} : {}} onClick={() => setIsNav(prev => !prev)} >

        <button className='p-2 place-self-end relative grid place-content-center' >
            <img src={navClose} alt="Close Nav" />
            <img src={gradientRing} alt="Gradient Ring" className='absolute w-full h-full top-0 left-0' />
        </button>

        <nav aria-label='Mobile Nav' className='font-inter mt-10'>
        <ul className='flex flex-col gap-7 text-lg w-fit'>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#faq">FAQs</a></li>
            <Link to={'contact'}>Contact</Link>
          </ul>
        </nav>

        <Link to={'register'} className='gradient rounded py-4 px-12 font-montserrat w-fit'>Register</Link>
    </aside>
  )
}

export default MobileNav