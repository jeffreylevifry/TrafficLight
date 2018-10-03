<template>
    <div id="app">
        <div id=" test"><h1>Traffic Light</h1></div>
        <nav>
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
    body {
        background-color: #F0F0F0;
    }

    h1 {
        padding: 0;
        margin-top: 0;
    }

    #app {
        width: 1024px;
        margin: auto;
    }
</style>