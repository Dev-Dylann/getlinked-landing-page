import rulesImg from '../assets/images/rules-image.png'

const Guidelines = () => {
  return (
    <section className='relative flex flex-col items-center text-center pb-16 border-b border-gray-700 lg:grid lg:grid-cols-2 lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <div className='absolute -top-64 left-0 w-full h-full -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light mask lg:hidden'></div>
        <div className='absolute -bottom-16 right-0 w-full h-[full] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180 mask sm:-bottom-28 lg:h-[600px]'></div>

        <img src={rulesImg} alt="Rules and Guidelines" className='lg:order-1 lg:justify-self-center lg:w-[70%]' />

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