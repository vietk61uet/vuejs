<template>
    <div class="register">
      <h1>Register</h1>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="button-group">
          <button class="button" @click="registerEvent">Register</button>
          <button class="button" @click="cancelEvent">Cancel</button>
        </div>
      </form>
      <div v-if="registrationSuccess" class="success-message">
        <p>Registration successful!</p>
      </div>
      <div v-if="registrationError" class="error-message">
        <p>{{ registrationError }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
        registrationSuccess: false,
        registrationError: "",
      };
    },
    methods: {
      registerEvent() {
        if (this.username == '' || this.email == '' || this.password == '') {
          console.log('Username or email or password must be filled');
          this.registrationError = "Username or email or password must be filled";
          return;
        }

        this.registrationSuccess = true;
        this.registrationError = "";
  
        // Clear form fields
        this.username = "";
        this.email = "";
        this.password = "";
      },
      cancelEvent() {
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    align-items: center;
    justify-content: center;
    margin-top: 9%;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    flex: 1;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    flex: 1;
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
  
  .success-message {
    margin-top: 20px;
    padding: 10px;
    background-color: #dff0d8;
    color: #3c763d;
    border: 1px solid #d6e9c6;
    border-radius: 3px;
  }
  
  .error-message {
    margin-top: 20px;
    padding: 10px;
    background-color: #f2dede;
    color: #a94442;
    border: 1px solid #ebccd1;
    border-radius: 3px;
  }
  
  p {
    margin: 0;
  }
  </style>