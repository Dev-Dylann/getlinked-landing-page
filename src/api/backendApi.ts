import axios from 'axios'

const backendApi = axios.create({
    baseURL: "https://backend.getlinked.ai/"
})

export default backendApi