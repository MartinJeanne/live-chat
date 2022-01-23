<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="document in formattedDocuments" :key="document.id" class="single">
        <span class="created-at">{{ document.createdAt}}</span>
        <span class="name">{{ document.name }}</span>
        <span class="message">{{ document.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, ref, onUpdated } from '@vue/runtime-core'

export default {
  setup() {
    const { documents, error } = getCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time}
        })
      }
    })

    //auto scroll
    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, documents, formattedDocuments, messages }
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
  height: 400px;
  max-height: 400px;
  overflow: auto;
  padding-right: 2px;
  padding-right: 8px;
}

.messages::-webkit-scrollbar {
    width: 8px;
}

.messages::-webkit-scrollbar-thumb {
    background-color: rgb(171, 171, 171);
}

.messages::-webkit-scrollbar-track {
    background-color: #646464;
}
</style>