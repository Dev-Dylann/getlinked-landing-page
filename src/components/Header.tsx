import { Link } from 'react-router-dom'
import navIcon from '../assets/icons/nav-icon.svg'

type HeaderProps = {
  setIsNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({setIsNav}: HeaderProps) => {
  return (
    <section className='border-b border-gray-700 px-10 py-[26px] flex justify-between items-center text-sm sm:px-12 lg:pt-10 lg:px-16 lg:gap-10 lg:justify-normal lg:bg-transparent xl:pt-12 xl:px-20 xl:gap-12 2xl:pt-16 2xl:px-28 2xl:gap-16' style={location.pathname !== '/' ? {borderWidth: '0px'} : {}}>
        <h1 className='font-bold text-white font-clash sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>get<span className='text-pinkish'>linked</span></h1>

        <button className='p-2 lg:hidden' onClick={() => setIsNav(prev => !prev)}>
          <img src={navIcon} alt="Nav Open Icon" className='w-[19px] h-[14px]' />
        </button>

        <nav aria-label='Desktop Nav' className='grow hidden lg:block'>
          <ul className='flex items-center justify-end font-montserrat gap-8 xl:gap-12 2xl:gap-16 '>
            <li><a href="/#timeline">Timeline</a></li>
            <li><a href="/#overview">Overview</a></li>
            <li><a href="/#faq">FAQs</a></li>
            <Link to={'/contact'}>Contact</Link>
          </ul>
        </nav>

        <Link to={'/register'} className='hidden lg:block gradient rounded font-montserrat py-4 px-6 xl:px-10 2xl:px-12'>Register</Link>
    </section>
  )
}

export default Header