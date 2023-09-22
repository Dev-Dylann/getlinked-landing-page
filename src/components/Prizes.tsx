import rewardImg from '../assets/images/reward.png'
import goldMedal from '../assets/images/gold-medal.png'
import silverMedal from '../assets/images/silver-medal.png'
import bronzeMedal from '../assets/images/bronze-medal.png'

const Prizes = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16'>
        <div className='absolute -top-20 left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-left-top bg-cover mix-blend-hard-light'></div>
        <div className='absolute -bottom-32 right-0 w-full h-[650px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180'></div>

        <article className=''>
            <h2 className='font-clash text-xl font-bold md:text-2xl'>Prizes and</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl'>Rewards</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base'>Highlight of the prizes or rewards for winners and for participants</p>
        </article>

        <img src={rewardImg} alt="Prizes and Rewards" className='mt-10' />

        <article className='grid grid-cols-3 items-center gap-4 px-10 text-xs font-montserrat font-bold mt-28 sm:scale-125 sm:mt-40'>
            <div className='flex flex-col items-center gap-1 relative pt-[52px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10'>
                <img src={silverMedal} alt="Silver Medal" className='absolute -top-9 left-0.5 w-20' />

                <p className='flex flex-col items-center gap-0.5'>
                    2nd
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish'>N300,000</p>
            </div>
            <div className='flex flex-col gap-1 relative pt-[75px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10'>
                <img src={goldMedal} alt="Gold Medal" className='absolute -top-9 left-0 w-40 scale-[1.4]' />

                <p className='flex flex-col items-center gap-0.5'>
                    1st
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish'>N400,000</p>
            </div>
            <div className='flex flex-col gap-1 relative pt-[52px] pb-6 px-2 rounded-lg border border-pinkish bg-pinkish bg-opacity-10'>
                <img src={bronzeMedal} alt="Bronze Medal" className='absolute -top-9 left-0.5 w-20' />

                <p className='flex flex-col items-center gap-0.5'>
                    3rd
                    <span className=''>Runner</span>
                </p>

                <p className='text-sm text-pinkish'>N150,000</p>
            </div>
        </article>

    </section>
  )
}

export default Prizes