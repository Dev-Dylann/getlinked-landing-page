import { useReducer, ChangeEvent } from 'react'
import registerSubmission from "../api/registerSubmission"
import dropdownIcon from '../assets/icons/dropdown.svg'

const enum REDUCER_ACTIONS {
    EMAIL_INPUT,
    PHONE_INPUT,
    TEAM_INPUT,
    SIZE_INPUT,
    TOPIC_INPUT,
    CATEGORY_INPUT,
    PRIVACY_INPUT,
}

type ReducerActionType = {
    type: REDUCER_ACTIONS,
    payload: string | number | boolean,
}

const initData = {
    email: '',
    phone_number: '',
    team_name: '',
    group_size: 0,
    project_topic: '',
    category: 0,
    privacy_poclicy_accepted: false,
}

const reducer = (state: typeof initData, action: ReducerActionType): typeof initData => {
    switch (action.type) {
        case REDUCER_ACTIONS.EMAIL_INPUT:
            return {...state, email: action.payload as string}
        case REDUCER_ACTIONS.PHONE_INPUT:
            return {...state, phone_number: action.payload as string}
        case REDUCER_ACTIONS.TEAM_INPUT:
            return {...state, team_name: action.payload as string}
        case REDUCER_ACTIONS.SIZE_INPUT:
            return {...state, group_size: action.payload as number}
        case REDUCER_ACTIONS.TOPIC_INPUT:
            return {...state, project_topic: action.payload as string}
        case REDUCER_ACTIONS.CATEGORY_INPUT:
            return {...state, category: action.payload as number}
        case REDUCER_ACTIONS.PRIVACY_INPUT:
            return {...state, privacy_poclicy_accepted: action.payload as boolean}
    }
}

type RegistrationFormProps = {
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean | null>>
}

const RegistrationForm = ({setIsSuccess}: RegistrationFormProps) => {
    const [state, dispatch] = useReducer(reducer, initData)

  return (
    <form action="" className='font-montserrat text-sm flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="teamName" className=''>
            Team's Name
            <input type="text" id='teamName' required placeholder="Enter the name of your group" className='w-full mt-1 py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={state.team_name} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTIONS.TEAM_INPUT, payload: e.target.value})} />
        </label>
        
        <label htmlFor="phone" className=''>
            Phone
            <input type="tel" id='phone' required placeholder="Enter your phone number" className='w-full mt-1 py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={state.phone_number} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTIONS.PHONE_INPUT, payload: e.target.value})} />
        </label>
        <label htmlFor="email" className=''>
            Email
            <input type="email" id='email' required placeholder="Enter your email address" className='w-full mt-1 py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={state.email} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTIONS.EMAIL_INPUT, payload: e.target.value})} />
        </label>
        <label htmlFor="projectTopic" className=''>
            Project Topic
            <input type="text" id='teamName' required placeholder="What is your group project topic?" className='w-full mt-1 py-3 px-6 rounded border border-white bg-white bg-opacity-5' value={state.project_topic} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTIONS.TOPIC_INPUT, payload: e.target.value})} />
        </label>

        <fieldset className='grid grid-cols-3 gap-5'>
            <label htmlFor="category" className='col-span-2'>
                Category
                <select id='category' className='w-full mt-1 p-3 appearance-none rounded border border-white bg-white bg-opacity-5 relative' value={state.category} onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch({type: REDUCER_ACTIONS.CATEGORY_INPUT, payload: e.target.value})}>
                    <option value="0" disabled>Select your category</option>
                    <option value="1">Mobile</option>
                    <option value="2">Web</option>
                    <option value="3">Backend</option>
                </select>
            </label>

            <label htmlFor="groupSize" className=''>
                Group Size
                <select id='groupSize' className='w-full mt-1 p-3 appearance-none rounded border border-white bg-white bg-opacity-5' value={state.group_size} onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch({type: REDUCER_ACTIONS.SIZE_INPUT, payload: e.target.value})}>
                    <option value="0" disabled>Select</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>
        </fieldset>

        <p className='text-[9px] italic text-pinkish'>Please review your application details before submitting</p>

        <label htmlFor="category" className='flex gap-2 leading-4 text-[10px]'>
            <input type="checkbox" className='border border-white accent-pinkish bg-transparent h-4 w-4 rounded-sm' checked={state.privacy_poclicy_accepted} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: REDUCER_ACTIONS.PRIVACY_INPUT, payload: e.target.checked})} />
            I agreed with the event terms and conditions and privacy policy
        </label>
        
        <button type="submit" disabled={!state.privacy_poclicy_accepted} className='w-fit self-center gradient rounded py-4 px-12 mt-2 disabled:grayscale' onClick={() => registerSubmission(state, setIsSuccess)}>Submit</button>
    
    </form>
  )
}

export default RegistrationForm