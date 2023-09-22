import backendApi from "./backendApi";

type FormDataType = {
    email: string;
    phone_number: string;
    team_name: string;
    group_size: number;
    project_topic: string;
    category: number;
    privacy_poclicy_accepted: boolean;
}

const registerSubmission = async (formData: FormDataType, setSuccess: React.Dispatch<React.SetStateAction<boolean | null>>): Promise<void> => {
    if (formData.team_name === '' || formData.phone_number === '' || formData.email === '' || formData.project_topic === '' || formData.category === 0 || formData.group_size === 0) {
        console.log('Required inputs left empty')
    } else {
        try {
            const response = await backendApi.post('hackathon/registration', formData)
            console.log(response)
            setSuccess(true)
        } catch(err) {
            console.log(err)
            setSuccess(false)
        }
    }
}

export default registerSubmission