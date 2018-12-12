<template>
  <div id="app">
    <a href="./">
      <img
        id="logo-holder"
        src="http://www.jeffreylevifry.com/TrafficLight/assets/traffic-light-logo.svg"
      />
    </a>
    <h3>417 North 8th Street</h3>
    <div id="splash-page-holder">
      <nav
        id="nav-front"
        v-if="['login', 'register'].indexOf($route.name) > -1"
      >
        <router-link
          v-if="authenticated"
          to="/login"
          v-on:click.native="logout();"
          replace
          >Logout</router-link
        >
        <router-link to="/frontEnd"
          ><div id="frontview">VIEW PRODUCTION STATUS</div></router-link
        >
      </nav>
      <router-view @authenticated="setAuthenticated" />
    </div>
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
        username: "",
        password: ""
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

  background-image: url("http://www.jeffreylevifry.com/TrafficLight/assets/traffic_gradient_blue.jpg");
  background-repeat: no-repeat;
  background-position: center top;
}
#splash-page-holder {
  margin-top: 8%;
  margin-bottom: 8%;
  background-color: rgba(255, 255, 255, 0.73);
  padding: 10px;
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
  width: 77%;
  height: 100%;
  margin: 5% auto auto auto;
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
  background-color: rgba(0, 0, 0, 0.05);
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
    line-height: 60px;
  }
  #frontview {
  }
  #app {
    margin: 0 px 0 px 0 px 0 px;
    width: 95%;
  }

  #logo-holder {
    max-width: 85%;
    margin-top: 10px;
  }
  #splash-page-holder {
    margin-top: 5%;
  }
}

@media screen and (max-width: 900px) {
  h2 {
    letter-spacing: 2px;
    line-height: 60px;
  }
  #app {
    margin: 0 px 0 px 0 px 0 px;
    width: 94%;
  }
  #splash-page-holder {
    margin-top: 5%;
  }
}
</style>
