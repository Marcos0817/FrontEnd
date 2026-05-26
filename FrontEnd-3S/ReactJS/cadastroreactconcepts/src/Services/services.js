import axios from "axios"

// http://localhost:3000

//define a porta onde a API local está rodando
const apiPort = "3000"

//define o endereço/endpoint da api local
const localApi = `http://localhost: ${apiPort}`

// define o endereço da apis externas
const externalApi = null

//
const api = axios.create({
    baseURL: localApi
})

export default api