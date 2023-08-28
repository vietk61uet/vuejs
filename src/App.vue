<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
    <p>login is: {{ msg }}</p>
  <br>
    <input v-model="msg" placeholder="login" />
  <br>
    <input v-model="password" placeholder="password" />
  <br>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
