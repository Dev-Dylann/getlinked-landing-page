import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import contactSubmission from '../api/contactSubmission'

const ContactForm = () => {
    const [teamName, setTeamName] = useState('')
    const [topic, setTopic] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitError, setSubmitError] = useState<boolean | null>(null)

    const success = useCallback(() => {
        setTeamName('')
        setTopic('')
        setEmail('')
        setMessage('')
        alert('Your message was successully submitted.')
    }, [])

    const failed = useCallback(() => {
        alert("Your message wasn't submitted.\nPlease try again")
    }, [])

    useEffect(() => {
        if (submitError !== null && !submitError) {
            success()
        } else if (submitError !== null && submitError) {
            failed()
        }
    }, [submitError])

  return (
    <form action="" className='font-montserrat mt-7 flex flex-col gap-6 items-center lg:w-[60%] lg:p-12 lg:rounded-xl lg:shadow-md lg:bg-white lg:bg-opacity-5 lg:mt-0' onSubmit={(e) => e.preventDefault()} >

        <article className='hidden lg:flex flex-col w-full'>
            <h2 className='text-pinkish font-bold font-clash'>Questions or need assistance?</h2>
            <h2 className='text-pinkish font-bold font-clash'>Let us know about it</h2>
        </article>

        <label htmlFor="teamName" className='fixed left-[9999px]'>
            Team's Name
        </label>
        <input type="text" required id='teamName' placeholder="Team's Name" className='w-full py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={teamName} onChange={(e: ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)} />

        <label htmlFor="topic" className='fixed left-[9999px]'>
            Topic
        </label>
        <input type="text" required id='topic' placeholder="Topic" className='w-full py-3 px-6 rounded border border-white bg-white bg-opacity-5 lg:hidden' value={topic} onChange={(e: ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)} />

        <label htmlFor="email" className='fixed left-[9999px]'>
            Email
        </label>
        <input type="email" required id='email' placeholder="Email" className='w-full py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

        <label htmlFor="message" className='fixed left-[9999px]'>
            Message
        </label>
        <textarea required id="message" placeholder="Message" className='w-full h-40 py-3 px-6 rounded border border-white bg-white bg-opacity-5 resize-none lg:h-24' value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} ></textarea>

        <button type="submit" className='gradient rounded py-4 px-12 mt-2' onClick={() => contactSubmission(teamName, topic, email, message, setSubmitError)} >Submit</button>
    </form>
  )
}

export default ContactForm