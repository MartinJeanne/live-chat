<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email" required>
      <input type="password" placeholder="password" v-model="password" required>
      <div class="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        async function handleSubmit() {
            await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>