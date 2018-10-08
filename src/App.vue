<template>
    <div id="app">
        <div id=" test"><h2>Traffic Light</h2><h3>417 North 8th Street</h3></div>
        <nav v-if="['login', 'register'].indexOf($route.name) > -1">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            <router-link to="/frontEnd">FRONT VIEW</router-link>
        </nav>
        <router-view @authenticated="setAuthenticated" />

    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                isFrontEnd: true,
                authenticated: false,
                mockAccount: {
                    username: "1",
                    password: "1"
                },
            }

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
        },

    }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Oswald');


    body {
        background-color: #F0F0F0;
    }

    h2 {
      letter-spacing: 6px;
      font-size: 60px;
        padding: 0;
        margin-top: 0;
        margin-bottom:0;
        font-weight:900;
    }
    h3{
      font-size:13px;
      margin-top:4px;
      letter-spacing: 14px;
    }

    #app {
        width: 1024px;
        margin: auto;
       text-transform: uppercase;
          font-family: 'Oswald', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
    }
</style>