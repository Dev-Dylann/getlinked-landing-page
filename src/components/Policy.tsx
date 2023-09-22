import listIcon from '../assets/icons/list-icon.svg'
import secureIcon from '../assets/icons/secure.svg'
import secureMan from '../assets/images/secure-man.png'

const Policy = () => {
  return (
    <section className='relative flex flex-col items-center text-center py-16'>
        <div className='absolute top-[380px] left-0 w-full h-[600px] -z-[1] bg-[url(./src/assets/images/purple-lens-flare.png)] bg-center bg-[size:135%] mix-blend-hard-light'></div>

        <article className='mt-6'>
            <h2 className='font-clash text-xl font-bold md:text-2xl'>Privacy Policy and</h2>
            <h2 className='text-pinkish font-clash text-xl font-bold md:text-2xl'>Terms</h2>

            <p className='font-montserrat text-xs opacity-75 mb-6 md:text-sm'>Last updated on September 12, 2023</p>

            <p className='mt-2 font-montserrat text-sm leading-[27.5px] px-12 sm:px-16 md:text-base'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
        </article>

        <article className='mt-7 font-montserrat border border-pinkish rounded bg-[rgba(217,_217,_217,_0.03)] flex flex-col mx-12 px-5 py-11 text-xs text-left sm:text-sm sm:px-10'>
            <p className='text-center leading-[25px]'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

            <h3 className='text-pinkish font-bold mt-8'>Licensing Policy</h3>
            <p className='font-bold mt-2'>Here are terms of our Standard License:</p>

            <ul className='flex flex-col gap-6 items-center mt-5'>
                <li className='flex gap-4'>
                    <img src={listIcon} alt="List Item" className='h-fit mt-2' />

                    <p className='leading-[21px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                </li>
                <li className='flex gap-4'>
                    <img src={listIcon} alt="List Item" className='h-fit mt-2' />

                    <p className='leading-[21px]'>You are licensed to use the item available at any free source sites, for your project development</p>
                </li>
            </ul>

            <button className='font-montserrat gradient w-fit mx-auto py-3 px-5 mt-6 rounded'>Read More</button>
        </article>

        <article className='mt-12 relative pb-32'>
            <img src={secureIcon} alt="Privacy Policy" />

            <img src={secureMan} alt="Privacy Policy" className='absolute top-24 -left-5' />
        </article>

    </section>
  )
}

export default Policy