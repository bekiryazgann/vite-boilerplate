import axios from "axios"

export const getTodosService = () => axios.get('https://api.eskizpsd.com/v2/todos')
