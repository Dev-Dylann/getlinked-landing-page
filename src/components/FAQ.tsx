import { Questions } from '../data/faq'
import questionsImg from '../assets/images/questions.svg'
import questionMark from '../assets/icons/question-mark.svg'
import FAQItem from './FAQItem'

const FAQ = () => {
  return (
    <section id='faq' className='flex flex-col items-center text-center pb-16 border-b border-gray-700 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,_1fr] lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <article className='mt-6 lg:px-10'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Frequently Ask</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Question</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-8 sm:px-16 md:text-base lg:px-0 lg:text-sm'>
            We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span>
            </p>
        </article>

        <article className='px-10'>
            <ul className='mt-12 flex flex-col font-montserrat text-xs text-left sm:text-sm lg:mt-0'>
               {Questions.map((question, index) => (
                <FAQItem key={`question${index}`} question={question} />
               ))}
            </ul>
        </article>

        <article className='relative mt-24 px-10 lg:px-0 lg:row-span-full lg:col-start-2'>
            <img src={questionsImg} alt="Frequently Asked Questions" className='lg:w-full' />

            <img src={questionMark} alt="Question Mark" className='absolute left-[20%] -top-2 w-5 sm:w-7 lg:-top-4 lg:left-[15%]' />
            <img src={questionMark} alt="Question Mark" className='absolute left-[38%] -top-7 sm:w-10 lg:left-[33%] lg:-top-12 lg:w-9' />
            <img src={questionMark} alt="Question Mark" className='absolute left-[56%] -top-1 w-5 sm:w-7 lg:-top-3' />
        </article>
    </section>
  )
}

export default FAQ