import criteriaImg from '../assets/images/criteria-image.png'

const Criteria = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16 border-b border-gray-700 lg:grid lg:grid-cols-2 lg:px-20 lg:text-left xl:px-32 xl:gap-12 2xl:gap-20 2xl:px-40'>
        <div className='absolute -top-16 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-left-top bg-cover mix-blend-hard-light mask lg:h-full lg:top-36 lg:-left-48'></div>
        <div className='absolute -bottom-36 right-0 w-full h-[650px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180 mask'></div>

        <img src={criteriaImg} alt="Judging Criteria" className='xl:w-full xl:place-self-center' />

        <article className='mt-6 font-montserrat text-sm leading-[22.5px] px-12 sm:px-16 md:text-base lg:px-0 lg:mt-0 lg:text-sm'>
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