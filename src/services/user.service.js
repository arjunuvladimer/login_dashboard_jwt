import axios from 'axios'
import authHeader from './auth-header'

const BASE_API_URL = 'http://localhost:8081/api/banking/'

class UserService{
    // GET ALL CUSTOMERS
    getAll(){
        return axios.get(`${BASE_API_URL}getAll`, {
            headers: authHeader()
        })
    }
}

export default new UserService
