import { EventType } from "../data/timelineEvents"

const isEven = (index: number): boolean => {
  if (index % 2) return false
  return true
}

type TimelineEventProps = {
    event: EventType,
    index: number,
}

const TimelineEvent = ({event, index}: TimelineEventProps) => {

  return (
    <li className='flex gap-4 lg:grid lg:grid-cols-[1fr,_auto,_1fr] lg:items-end lg:gap-10 xl:gap-12 2xl:gap-16'>
        <div className='flex flex-col gap-1 items-center mt-2.5 self-end lg:mb-2 lg:gap-2'>
            <span className='h-20 w-[2px] bg-pinkish sm:h-16 lg:h-28 xl:w-[3px] xl:rounded'></span>
            <span className='w-5 h-5 font-montserrat font-bold grid place-content-center rounded-full gradient2 text-xs lg:text-lg lg:h-8 lg:w-8 xl:h-10 xl:w-10 xl:text-xl'>{index}</span>
        </div>

        <div className={!isEven(index) ? `font-montserrat flex flex-col gap-1.5 lg:text-right lg:-order-1` : `font-montserrat flex flex-col gap-1.5`} >
            <h3 className='text-pinkish font-bold lg:text-xl xl:text-2xl'>{event.title}</h3>

            <p className='flex-grow leading-[21px]'>{event.desc}</p>
                        
            <p className='font-bold text-pinkish mt-1 lg:hidden'>{event.date}</p>
        </div>

        <p className={isEven(index) ? `font-bold text-pinkish mt-1 hidden lg:block lg:text-xl lg:-order-1 lg:text-right lg:mb-2 xl:text-2xl` : `font-bold text-pinkish mt-1 hidden lg:block lg:text-xl lg:mb-2 xl:text-2xl`}>{event.date}</p>

    </li>
  )
}

export default TimelineEvent