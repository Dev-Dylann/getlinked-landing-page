import { Link } from 'react-router-dom'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import phoneIcon from '../assets/icons/phone.svg'
import locationIcon from '../assets/icons/location.svg'

const Footer = () => {
  return (
    <section className='bg-[#100B20] px-20 py-12 font-montserrat text-xs flex flex-col gap-8 sm:px-24 md:text-sm lg:px-28 lg:grid lg:grid-cols-[1fr,_auto,_auto] lg:gap-x-12 lg:text-xs xl:gap-x-20 xl:text-sm xl:px-32 xl:mt-20'>
        <article className='flex flex-col gap-3 xl:max-w-[600px]'>
            <h2 className='font-clash font-bold text-xl md:text-2xl'>get<span className='text-pinkish'>linked</span></h2>

            <p className='leading-[21px]'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>

            <div className='flex gap-1 items-center mt-7'>
                <p>Terms of use</p>
                <span className='border border-pinkish w-4 rotate-90'> </span>
                <p>Privacy Policy</p>
            </div>
        </article>

        <nav aria-label="Footer Nav">
          <h3 className="font-bold text-pinkish text-sm">Useful Links</h3>

          <ul className='mt-2 flex flex-col gap-3'>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#faq">FAQs</a></li>
            <Link to={'register'}>Register</Link>
          </ul>

          <article className='flex items-center gap-4 mt-5'>
            <p className='text-pinkish'>Follow us</p>

            <img src={instagram} alt="Instagram" />
            <img src={x} alt="X" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="Linkedin" />
          </article>
        </nav>

        <article className='mt-10 lg:place-self-start lg:mt-0'>
        <h3 className="font-bold text-pinkish text-sm">Contact Us</h3>

        <p className='flex gap-4 mt-2'>
          <img src={phoneIcon} alt="Phone" />

          <a href="tel:+23467981819">+234 679 81819</a>
        </p>

        <p className='flex gap-4 mt-6'>
          <img src={locationIcon} alt="Address" className='h-fit' />

          <address className='not-italic'>
            27, Alara Street<br />
            Yaba 100012<br />
            Lagos State
          </address>
        </p>

        </article>

        <p className="text-center mt-10 lg:col-span-full lg:text-xs">All rights reserved. &copy; getlinked Ltd.</p>

    </section>
  )
}

export default Footer