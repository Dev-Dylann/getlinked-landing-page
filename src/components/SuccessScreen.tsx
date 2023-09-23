import { useNavigate } from 'react-router-dom'
import successMan from '../assets/images/successful-man.png'
import successImg from '../assets/images/success-image.png'

const SuccessScreen = (): JSX.Element => {

    const navigate = useNavigate()

  return (
    <article className='p-8 rounded border border-pinkish bg-black bg-opacity-5 flex flex-col items-center gap-7 font-montserrat  text-center text-white lg:w-1/2'>
        <div className='flex relative w-full lg:w-fit'>
            <img src={successImg} alt="Success" className='-ml-2 lg:-ml-6 lg:w-60' />
            <img src={successMan} alt="Success" className='absolute -right-4 top-4 lg:-right-10 lg:w-56' />
        </div>

        <h2 className='font-bold mt-6'>Congratulations! <br /> You have successfully registered.</h2>

        <p className='text-xs'>Yes, it was easy and you did it!<br /> Check your mail box for next step</p>

        <button type='button' className='gradient py-4 font-bold rounded w-full' onClick={() => navigate('/')}>Back</button>
    </article>
  )
}

export default SuccessScreen