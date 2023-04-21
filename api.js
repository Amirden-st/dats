import axios from "axios";


const api = axios.create({
    baseURL: 'http://api.datsart.dats.team/',
    headers: {
        Authorization: `Bearer 643cd6afd4938643cd6afd493a`,
        "Content-Type": 'multipart/form-data',
    }
})

export default api