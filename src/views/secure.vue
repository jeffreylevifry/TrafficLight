<template>
    <div id="secure">
        <SingleLight id="SmallFormat" status="" machine="Small Format" subtext="Small Format"
                     v-on:change-color="changeSF" v-bind:style="{ backgroundColor: this.$store.state.sf.backgroundColor }"></SingleLight>
        <!---
    <SingleLight id="6100" status="" machine="HP z6100" subtext="Large Format"
                 v-on:change-color="change6100"v-bind:style="{ backgroundColor: hpz.backgroundColor}"></SingleLight>
    <SingleLight id="360" status="" machine="HP 360 Latex" subtext="Large Format Outdoor"
                 v-on:change-color="change360"v-bind:style="{ backgroundColor: latex.backgroundColor}"></SingleLight>
    <SingleLight id="Flatbed" status="" machine="Flatbed" subtext="Flatbed"
                 v-on:change-color="changeFlatbed"v-bind:style="{ backgroundColor: flatbed.backgroundColor}"></SingleLight>
    <SingleLight id="Finishing" status="" machine="Finishing" subtext="Finishing"
                 v-on:change-color="changeFinishing"v-bind:style="{ backgroundColor: finishing.backgroundColor}"></SingleLight>
        -->
    </div>
</template>

<script>
import SingleLight from "../components/SingleLight.vue";
//import { db } from "./firebase";

export default {
  name: "Secure",

  components: {
    SingleLight
  },

  data() {
    return {
      hpz: { backgroundColor: "" },
      latex: { backgroundColor: "" },
      flatbed: { backgroundColor: "" },
      finishing: { backgroundColor: "" }
    };
  },

  methods: {
    changeSF: function(newColor) {
      // console.log("sf.backgroundColor = " + this.$data.sf.backgroundColor);
      //   this.$store.commit('changeSF',newColor);
      // computed.sfBgGet();
      // this.$store.state.sf.backgroundColor = newColor;
      //this.$data.sf.backgroundColor = newColor;
      //this.$root.$emit('changeSFSignal');
    },
    change6100: function(newColor) {
      // store.changeHpx(newColor);
    },
    change360: function(newColor) {
      //  store.changeLatex(newColor);
    },
    changeFlatbed: function(newColor) {
      // store.changeFlatbed(newColor);
    },
    changeFinishing: function(newColor) {
      // store.changeFinishing(newColor);
    }
  }
};
</script>

<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
