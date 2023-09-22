import libertyLogo from '../assets/images/liberty-logo.png'
import libertyPayLogo from '../assets/images/libertypay-logo.png'
import winwiseLogo from '../assets/images/winwise-logo.png'
import wisperLogo from '../assets/images/wisper-logo.png'
import payboxLogo from '../assets/images/paybox-logo.png'
import vuzualPlusLogo from '../assets/images/vuzual-plus-logo.png'

const Sponsors = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16 pb-32 border-b border-gray-700'>
        <div className='absolute -top-28 left-0 w-full h-full -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-[size:130%] mix-blend-hard-light'></div>
        <div className='absolute -bottom-[300px] right-0 w-full h-[650px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-cover mix-blend-hard-light rotate-180'></div>

        <article className='mt-6'>
            <h2 className='font-clash text-xl font-bold md:text-2xl'>Partners and Sponsors</h2>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </article>

        <article className='grid grid-cols-3 gap-y-4 mt-10 w-[75%] mx-auto px-6 py-10 border border-pinkish rounded bg-black bg-opacity-5'>

            <div className='grid place-content-center relative'>
                <img src={libertyLogo} alt="Liberty Company Logo" className='' />

                <span className='absolute right-0 top-0 w-0.5 h-full bg-pinkish'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={libertyPayLogo} alt="LibertyPay Company Logo" className='' />

                <span className='absolute right-0 top-0 w-0.5 h-full bg-pinkish'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={winwiseLogo} alt="Winwise Company Logo" className='' />
            </div>
            <div className='grid place-content-center relative'>
                <img src={wisperLogo} alt="Wisper Company Logo" className='' />

                <span className='absolute right-0 bottom-0 w-0.5 h-full bg-pinkish'></span>
                <span className='absolute right-2 -top-2 w-[80%] h-0.5 bg-pinkish'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={payboxLogo} alt="Paybox Company Logo" className='' />

                <span className='absolute right-0 bottom-0 w-0.5 h-full bg-pinkish'></span>
                <span className='absolute right-2 -top-2 w-[85%] h-0.5 bg-pinkish'></span>
            </div>
            <div className='grid place-content-center relative'>
                <img src={vuzualPlusLogo} alt="Vuzual Plus Company Logo" className='' />

                <span className='absolute left-2 -top-2 w-[80%] h-0.5 bg-pinkish'></span>
            </div>

            {/* <img src={libertyLogo} alt="Liberty Company Logo" className='self-center justify-self-center w-10' />
            <img src={libertyPayLogo} alt="Liberty Pay Company Logo" className='self-center justify-self-center w-16' />
            <img src={winwiseLogo} alt="Winwise Logo" className='self-center justify-self-center w-10' />
            <img src={wisperLogo} alt="Wisper" className='self-center justify-self-center w-12'/>
            <img src={payboxLogo} alt="Paybox" className='self-center justify-self-center w-[56px]'/>
            <img src={vuzualPlusLogo} alt="Vuzual Plus" className='self-center justify-self-center w-[70px]'/> */}
        </article>

    </section>
  )
}

export default Sponsors