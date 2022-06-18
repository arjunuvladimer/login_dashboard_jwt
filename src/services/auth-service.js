// Authentication Service

import axios from 'axios'

const BASE_API_URL = 'http://localhost:8081/api/banking/'

class AuthService {
    // Login
    login(user){
        return axios.post(`${BASE_API_URL}login`, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if(response.data.data.token){
                localStorage.setItem('user',JSON.stringify(response.data.data))
            }
            return response.data
        })
    }

    // Logout Service
    logout(){
        localStorage.removeItem('user')
    }

    // Signup Service
    register(user){
        return axios.post(`${BASE_API_URL}addCustomer`, {
            name:user.name,
            mobile:user.mobile,
            address:user.address,
            email:user.email,
            password:user.password
        })
    }
}

export default new AuthService()