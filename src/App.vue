<template>
  <div id="app">
    <img
      id="logo-holder"
      src="http://www.jeffreylevifry.com/TrafficLight/assets/traffic-light-logo.svg"
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

html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  background-color: #f6f6f6;
  /*
  background-image: url("http://www.jeffreylevifry.com/TrafficLight/assets/tlight.jpg");
  background-repeat: no-repeat;
  background-position: center;
  */
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
  font-size: 13px;
  margin: 0px 0px 2px 0px;
  letter-spacing: 5px;
}
#logo-holder {
  max-width: 42%;
}

a {
  color: #2c3e50;
  font-weight: 900;
}

#app {
  width: 90%;
  height: 100%;
  margin: auto auto auto auto;
  padding: 1% %4 1% 4%;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0);
}

a {
  text-decoration: none;
}

#frontview {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 2% auto auto auto;
}

#nav-front {
  margin: auto;
  text-align: center;
  font-size: 30px;
  border: none;
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
  }
  #app {
    width: 95%;
  }

  @media screen and (max-width: 900px) {
    #app {
      width: 94%;
    }
  }
}
</style>
