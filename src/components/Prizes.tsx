import rewardImg from '../assets/images/reward.png'
import goldMedal from '../assets/images/gold-medal.png'
import silverMedal from '../assets/images/silver-medal.png'
import bronzeMedal from '../assets/images/bronze-medal.png'

const Prizes = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16 lg:mt-10 lg:grid lg:grid-cols-2 lg:px-20 lg:text-left xl:px-32 2xl:px-40'>
        <div className='absolute -top-20 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-left-top bg-cover mix-blend-hard-light mask lg:-left-16'></div>
        <div className='absolute -bottom-32 right-0 w-full h-[650px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180 mask'></div>

        <article className='lg:col-span-full lg:place-self-end lg:w-[45%]'>
            <h2 className='font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Prizes and</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl'>Rewards</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base lg:px-0'>Highlight of the prizes or rewards for winners and for participants</p>
        </article>

        <img src={rewardImg} alt="Prizes and Rewards" className='mt-10 lg:w-full lg:mt-0 xl:w-[80%]' />

        <article className='grid grid-cols-[auto,_auto,_auto] items-center gap-4 px-10 text-xs font-montserrat font-bold mt-28 sm:scale-125 sm:mt-40 lg:mt-0 lg:place-self-center xl:scale-150 xl:mt-28'>
            <div className='flex flex-col items-center gap-1 relative pt-[52px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10 lg:pt-[65px] lg:pb-4 lg:px-4'>
                <img src={silverMedal} alt="Silver Medal" className='absolute -top-9 inset-0 mx-auto w-20 lg:scale-[1.2]' />

                <p className='flex flex-col items-center gap-0.5'>
                    2nd
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish text-center'>N300,000</p>
            </div>
            <div className='flex flex-col gap-1 relative pt-[75px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10 lg:pt-[90px] lg:pb-4 lg:px-4'>
                <img src={goldMedal} alt="Gold Medal" className='absolute -top-9 left-0 w-40 scale-[1.4] lg:-top-12 ' />

                <p className='flex flex-col items-center gap-0.5'>
                    1st
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish text-center'>N400,000</p>
            </div>
            <div className='flex flex-col gap-1 relative pt-[52px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10 lg:pt-[65px] lg:pb-4 lg:px-4'>
                <img src={bronzeMedal} alt="Bronze Medal" className='absolute -top-9 inset-0 mx-auto w-20 lg:scale-[1.2]' />

                <p className='flex flex-col items-center gap-0.5'>
                    3rd
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish text-center'>N150,000</p>
            </div>
        </article>

    </section>
  )
}

export default Prizes