import {createStore} from 'vuex'
import auth from './auth.module'

const store = createStore({
    modules:{
        auth
    }
})

// Auth Module
// state: {status, user}
// actions: {login, logout, register}
// mutations: {loginSuccess, loginFailure, logout, registerSucess, registerFailure}

export default store