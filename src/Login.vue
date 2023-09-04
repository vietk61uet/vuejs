<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <input v-model="login" placeholder="login" />
    <br>
    <input v-if="isPassword" v-model="password" type="password" placeholder="password"/>
    <i
      class="password-toggle"
      :class="{'fas fa-eye': isPassword, 'fas fa-eye-slash': !isPassword}"
      @click="togglePasswordVisibility"
    ></i>
    <br>
    <br>
    <button class="button" @click="signInEvent">sign in</button>
    <button class="button" @click="signUpEvent">sign up</button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      login: '',
      password: '',
      isPassword: true
    }
  },
  methods: {
    signInEvent() {
      if (this.login == '' || this.password == '') {
        console.log('login and password cannot be empty');
        return;
      }

      console.log('Sign In clicked!');
      this.$router.push('/dashboard');
    },
    signUpEvent() {
      console.log('Sign Up clicked!');
    },
    togglePasswordVisibility() {
      this.isPassword = !this.isPassword;
    }
  }
};
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

.button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #15508e;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.password-toggle i {
  display: none;
}

.password-toggle i.fa-eye {
  display: none;
}

.password-toggle i.fa-eye-slash {
  display: none;
}

.eye-icon {
  width: 16px;
  height: auto;
}
</style>