import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)

async function signup(email, password, displayName) {
    error.value = null

    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!response) {
            throw new Error('Could not complete the signup')
        }
        await response.user.updateProfile({ displayName })
        error.value = null
        return response
        
    } catch (err) {
        console.log(err.message)
        error.value = 'Sorry, an error has occured'
    }
}


function useSignup() {
    return { error, signup }
}


export default useSignup