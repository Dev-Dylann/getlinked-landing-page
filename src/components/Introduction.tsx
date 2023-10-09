import bigIdea from '../assets/images/the-big-idea.png'
import arrow from '../assets/images/arrow.png'

const Introduction = () => {
  return (
    <section id='overview' className='flex flex-col border-b border-gray-700 items-center text-center py-16 lg:grid lg:grid-cols-2 lg:gap-x-[5%] lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <div className='flex flex-col items-center relative'>
          <img src={bigIdea} alt="The Big Idea" className='lg:w-[80%]' />
          <img src={arrow} alt="Arrow" className='lg:absolute lg:bottom-0 lg:right-6 lg:w-12 ' />

          <span className='font-montserrat text-sm font-bold absolute inset-0 mx-auto top-[120px] -ml-1.5 text-center lg:top-[45%] lg:text-lg'>The Big<br />Idea</span>
        </div>

        <article className='mt-6'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Introduction to getLinked</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold  md:text-2xl lg:text-3xl xl:text-4xl'>tech Hackathon 1.0</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base lg:px-0'>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
            </p>
        </article>
    </section>
  )
}

export default Introduction