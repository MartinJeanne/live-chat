<template>
  <form>
    <textarea
      placeholder="Type your message here"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
  setup() {
    const { user } = getUser()
    const message = ref('')
    const { addDoc, error } = useCollection('messages')

    async function handleSubmit() {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }
      await addDoc(chat)
      if (!error.value) message.value = ''
    }
    return { message, handleSubmit, error }
  }
}
</script>

<style scoped>
form {
    margin: 10px;
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 15px;
    font-family: inherit;
    outline: none;
    background-color: rgb(102, 102, 102);
    color: white;
}

textarea::placeholder {
  color: rgb(156, 156, 156);
}
</style>