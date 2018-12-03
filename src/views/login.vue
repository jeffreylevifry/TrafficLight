<template>
  <div id="login">
    <h1>OPERATOR LOGIN</h1>
    <div id="input-login-holder">
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
      />
      <button type="button" v-on:click="login();">Login</button>
    </div>
  </div>
</template>

<script>
//import {popup} from '../components/popUp.vue';

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 2% auto auto auto;
}
#input-login-holder input {
  width: 70%;
  margin: 1% auto 1% auto;
  display: block;
}
#input-login-holder button {
  margin: 5px;
}

@media screen and (max-width: 600px) {
}
</style>
