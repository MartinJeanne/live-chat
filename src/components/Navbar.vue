<template>
  <nav>
      <div>
          <p>Hey there... display name here</p>
          <p class="email">currentrly logged in as... email</p>
      </div>
      <button>Logout</button>
  </nav>
</template>

<script>
export default {

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