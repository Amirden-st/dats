import api from "./api.js";

async function getStage() {
    try {
        const res = await api.post('/art/stage/next')
        console.log(res.data.response.images)
    } catch (e) {
        if (error.response) {
            const errorConfig = error.config

            console.error('Error:', {
                method: 'Post',
                baseURL: errorConfig.baseURL,
                url: errorConfig.url,
            })
            console.error('Response code:', error.response.status);
            console.error('Message:', error.response.data.message)
        }
    }
}

