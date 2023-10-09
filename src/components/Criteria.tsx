import lensFlareMobile from '../assets/images/purple-lens-flare-mobile.svg'
import lensFlare from '../assets/images/purple-lens-flare.svg'
import criteriaImg from '../assets/images/criteria-image.svg'
import gradientEllipse from '../assets/images/gradient-ellipse.svg'

const Criteria = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16 border-b border-gray-700 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-20 lg:text-left xl:px-32 xl:gap-12 2xl:gap-20 2xl:px-40'>
        {/* Lens Flare Image for background */}
        <img src={screen.width < 1024 ? lensFlareMobile : lensFlare} alt="Background Image" className='mask-mobile mix-blend-hard-light absolute top-8 left-0 w-full h-auto -z-[10] md:top-10 lg:top-48 lg:-left-16 lg:mask-desktop lg:w-4/5' />
        <img src={screen.width < 1024 ? lensFlareMobile : lensFlare} alt="Background Image" className='mask-mobile mix-blend-hard-light rotate-180 absolute bottom-8 right-0 w-full h-auto -z-[10] sm:-bottom-12 md:-bottom-32 lg:-bottom-56 lg:mask-desktop lg:w-4/5' />
        

        <div className='relative px-10 place-self-center lg:px-0 xl:w-full xl:place-self-end'>
            <img src={criteriaImg} alt="Judging Criteria" className='' />

            <img src={gradientEllipse} alt="Gradient Ellipse" className='hidden lg:block absolute -top-[8%] left-[13%] -z-[10] w-24' /> 
        </div>

        <article className='mt-6 font-montserrat text-sm leading-[22.5px] px-12 sm:px-16 md:text-base lg:px-0 lg:mt-0 lg:text-xs'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Judging Criteria</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Key Attributes</h2>

            <p className='mt-4'>
                <span className='text-pinkish font-bold'>Innovation and Creativity: </span>
                Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </p>
            <p className='mt-4'>
                <span className='text-pinkish font-bold'>Functionality: </span>
                Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>
            <p className='mt-4'>
                <span className='text-pinkish font-bold'>Impact and Relevance: </span>
                Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
            </p>
            <p className='mt-4'>
                <span className='text-pinkish font-bold'>Technical Complexity: </span>
                Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
            </p>
            <p className='mt-4'>
                <span className='text-pinkish font-bold'>Adherence to Hackathon Rules: </span>
                Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements
            </p>

            <button className='text-sm font-montserrat gradient py-3 px-5 mt-6 rounded md:text-base'>Read More</button>
        </article>

    </section>
  )
}

export default Criteria