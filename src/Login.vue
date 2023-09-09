<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <div class="input-group">
      <input v-model="login" placeholder="Login" class="input-field" />
    </div>
    <br>
    <div class="input-group">
      <input v-if="isPassword" v-model="password" type="password" placeholder="Password" class="input-field"/>
      <i
        class="password-toggle"
        :class="{'fas fa-eye': isPassword, 'fas fa-eye-slash': !isPassword}"
        @click="togglePasswordVisibility"
      ></i>
    </div>
    <br>
    <br>
    <div class="button-group">
      <button class="button" @click="signInEvent">Sign In</button>
      <button class="button" @click="signUpEvent">Sign Up</button>
    </div>
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
        console.log('Login and password cannot be empty');
        return;
      }

      console.log('Sign In clicked!');
      this.$router.push('/dashboard');
    },
    signUpEvent() {
      console.log('Sign Up clicked!');
      this.$router.push('/register');
    },
    togglePasswordVisibility() {
      this.isPassword = !this.isPassword;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Đảm bảo container chiếm đủ chiều cao của màn hình */
}

.input-group {
  position: relative;
  margin-bottom: 16px;
}

.input-field {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 300px;
}

.button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.password-toggle i {
  font-size: 14px;
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