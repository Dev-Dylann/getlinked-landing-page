import lensFlareMobile from '../assets/images/purple-lens-flare-mobile.svg'
import lensFlare from '../assets/images/purple-lens-flare.svg'
import rulesImg from '../assets/images/rules-image.svg'
import gradientEllipse from '../assets/images/gradient-ellipse.svg'

const Guidelines = () => {
  return (
    <section className='relative flex flex-col items-center text-center pb-16 border-b border-gray-700 lg:grid lg:grid-cols-2 lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
      {/* Lens Flare Image for background */}
      <img src={screen.width < 1024 ? lensFlareMobile : lensFlare} alt="Background Image" className='mask-mobile mix-blend-hard-light absolute -top-28 left-0 w-full h-auto -z-[10] sm:-top-40 md:-top-56 lg:mask-desktop lg:w-4/5 lg:-top-16' />
      <img src={screen.width < 1024 ? lensFlareMobile : lensFlare} alt="Background Image" className='mask-mobile mix-blend-hard-light rotate-180 absolute bottom-0 right-0 w-full h-auto -z-[10] sm:-bottom-36 lg:mask-desktop lg:w-4/5' />
        
        <div className='lg:order-1 relative lg:flex lg:justify-end'>
          <img src={rulesImg} alt="Rules and Guidelines" className='w-full lg:max-w-md' />

          <img src={gradientEllipse} alt="Gradient Ellipse" className='hidden lg:block absolute top-[17%] right-[7%] -z-[10] w-24' />
        </div>

        <article className='mt-6'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Rules and</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Guidelines</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base lg:px-0'>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
            </p>
        </article>
    </section>
  )
}

export default Guidelines