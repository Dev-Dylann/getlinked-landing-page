import { timelineEvents } from "../data/timelineEvents"
import TimelineEvent from "./TimelineEvent"

const Timeline = () => {
  return (
    <section id='timeline' className='flex flex-col items-center py-16 lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <article className='mt-6 text-center'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Timeline</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </article>

        <article className='mt-14 px-12 text-xs sm:px-16 sm:text-sm'>
            <ul className='flex flex-col gap-8 lg:gap-0'>
                {timelineEvents.map((event, index) => (
                    <TimelineEvent key={`event${index}`} event={event} index={index + 1} />
                ))}
            </ul>
        </article>

    </section>
  )
}

export default Timeline