import backendApi from './backendApi.ts'

const contactSubmission = async (teamName: string, topic: string, email: string, message: string, setError: React.Dispatch<React.SetStateAction<boolean | null>>): Promise<void> => {
    if (teamName === '' || email === '' || message === '') {
        console.log('Required inputs left empty')
    } else {
        const formData = {
            first_name: teamName,
            topic,
            email,
            message,
        }
    
        try {
            const response = await backendApi.post('/hackathon/contact-form', formData)
            console.log(response)
            setError(false)
        } catch(err) {
            console.log(err)
            setError(true)
        }
    }
}

export default contactSubmission