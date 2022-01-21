<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="document in documents" :key="document.id" class="single">
        <span class="created-at">{{ document.createdAt.toDate() }}</span>
        <span class="name"> {{ document.name }} </span>
        <span class="message"> {{ document.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getCollection from '../composables/getCollection'

export default {
  setup() {
    const { documents, error } = getCollection('messages')

    return { documents, error }
  }
}
</script>

<style>
.chat-window {
  background: #3b3b3b;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>