<template>
  <nav v-if="user">
    <div>
      <p>{{ user.displayName }}</p>
      <p class="email">{{ user.email }}</p>
    </div>
    <button @click="clickLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()

    async function clickLogout() {
        await logout()
        if (!error.value) {
            console.log("Logout user")
        }
    }
    return { clickLogout, user }
  }
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid rgb(66, 66, 66);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: rgb(232, 234, 235);
}

nav p.email {
  font-size: 14px;
  color: rgb(209, 209, 209);
}
</style>