<template>
  <div id="app">
    <img
      id="logo-holder"
      src="http://jeffreylevifry.com/TrafficLight/assets/traffic-light-logo.svg"
    />
    <h3>417 North 8th Street</h3>

    <nav id="nav-front" v-if="['login', 'register'].indexOf($route.name) > -1">
      <router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout();"
        replace
        >Logout</router-link
      >
      <router-link to="/frontEnd"
        ><div id="frontview">STATUS VIEW</div></router-link
      >
    </nav>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isFrontEnd: true,
      authenticated: false,
      mockAccount: {
        username: "1",
        password: "1"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed|Oswald");

body {
  background-color: #f0f0f0;
}

h2 {
  letter-spacing: 7px;
  font-size: 45px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
}
h3 {
  font-size: 12px;
  margin-top: 2px;
  letter-spacing: 5px;
}
#logo-holder {
  max-width: 33%;
}

#app {
  width: 80%;
  margin: auto;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 7px;
}

a {
  text-decoration: none;
}

#frontview {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
}

#nav-front {
  margin: auto;
  text-align: center;
  font-size: 30px;
}
#title {
  display: inline;
  width: 100%;
  margin: auto;
}

@media screen and (max-width: 600px) {
  h3 {
    letter-spacing: 2px;
  }
  h2 {
    letter-spacing: 2px;
    line-height: 69px;
  }
  #frontview {
    width: 200px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    margin: auto;
    margin-top: 40px;
    padding: 20px;
  }
  #app {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    #app {
      width: 90%;
    }
  }
}
</style>
