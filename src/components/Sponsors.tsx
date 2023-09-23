import libertyLogo from '../assets/images/liberty-logo.svg'
import libertyPayLogo from '../assets/images/libertypay-logo.svg'
import winwiseLogo from '../assets/images/winwise-logo.svg'
import wisperLogo from '../assets/images/wisper-logo.svg'
import payboxLogo from '../assets/images/paybox-logo.svg'
import vuzualPlusLogo from '../assets/images/vuzual-plus-logo.svg'

const Sponsors = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16 pb-32 border-b border-gray-700 lg:mt-10 lg:px-20 xl:px-32 2xl:px-40'>
        <div className='absolute -top-28 left-0 w-full h-full -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-[size:130%] mix-blend-hard-light'></div>
        <div className='absolute -bottom-[300px] right-0 w-full h-[650px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180'></div>

        <article className='mt-6'>
            <h2 className='font-clash text-xl font-bold md:text-2xl  lg:text-3xl xl:text-4xl'>Partners and Sponsors</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base lg:px-0 lg:text-sm xl:text-base'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </article>

        <article className='grid grid-cols-3 gap-y-4 mt-10 w-[75%] mx-auto px-6 py-8 border border-pinkish rounded bg-black bg-opacity-5 lg:w-full lg:p-16 lg:gap-y-12 xl:p-24'>

            <div className='grid place-content-center relative'>
                <img src={libertyLogo} alt="Liberty Company Logo" className='w-10 md:w-12 lg:w-20 xl:w-24' />

                <span className='absolute right-0 top-0 w-[1px] h-full bg-pinkish lg:w-0.5'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={libertyPayLogo} alt="LibertyPay Company Logo" className='w-16 md:w-20 lg:w-32 xl:w-40' />

                <span className='absolute right-0 top-0 w-[1px] h-full bg-pinkish lg:w-0.5'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={winwiseLogo} alt="Winwise Company Logo" className='w-10 md:w-12 lg:w-20' />
            </div>
            <div className='grid place-content-center relative'>
                <img src={wisperLogo} alt="Wisper Company Logo" className='w-12 md:w-[56px] lg:w-24 xl:w-28' />

                <span className='absolute right-0 bottom-0 w-[1px] h-full bg-pinkish lg:w-0.5'></span>
                <span className='absolute inset-0 mx-auto -top-2 w-[80%] h-[1px] bg-pinkish lg:h-0.5 lg:-top-6'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={payboxLogo} alt="Paybox Company Logo" className='w-[56px] md:w-16 lg:w-28 xl:w-32' />

                <span className='absolute right-0 bottom-0 w-[1px] h-full bg-pinkish lg:w-0.5'></span>
                <span className='absolute inset-0 mx-auto -top-2 w-[85%] h-[1px] bg-pinkish lg:h-0.5 lg:-top-6'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={vuzualPlusLogo} alt="Vuzual Plus Company Logo" className='w-[70px] md:w-[78px] lg:w-[140px] xl:w-40' />

                <span className='absolute inset-0 mx-auto -top-2 w-[80%] h-[1px] bg-pinkish lg:h-0.5 lg:-top-6'></span>
            </div>
        </article>

    </section>
  )
}

export default Sponsors