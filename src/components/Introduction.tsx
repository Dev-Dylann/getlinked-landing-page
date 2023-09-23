import bigIdea from '../assets/images/the-big-idea.png'
import arrow from '../assets/images/arrow.png'

const Introduction = () => {
  return (
    <section id='overview' className='flex flex-col border-b border-gray-700 items-center text-center py-16 mt-16 sm:mt-[250px] lg:mt-10 lg:grid lg:grid-cols-2 lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <img src={bigIdea} alt="The Big Idea" className='lg:w-[80%]' />
        <img src={arrow} alt="Arrow" className='lg:hidden' />

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