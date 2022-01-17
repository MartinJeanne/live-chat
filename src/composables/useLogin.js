import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)

async function login(email, password) {
    error.value = null

    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        return response
        
    } catch (err) {
        console.log(err.message)
        error.value = 'Incorrect login credentials'
    }
}


function useLogin() {
    return { error, login }
}


export default useLogin