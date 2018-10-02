<template>
    <div id="frontEnd">
        <SingleLightFront id="SmallFormat" status="" machine="Small Format" subtext="Small Format"
                          v-bind:style="{ backgroundColor: config.sfBG}"></SingleLightFront>
        <!---
                    <SingleLightFront id="6100" status="" machine="HP z6100" subtext="Large Format"
                                 v-bind:style="{ backgroundColor: storeState.hpz.backgroundColor}"></SingleLightFront>
                    <SingleLightFront id="360" status="" machine="HP 360 Latex" subtext="Large Format Outdoor"
                                 v-bind:style="{ backgroundColor: storeState.latex.backgroundColor}"></SingleLightFront>
                    <SingleLightFront id="Flatbed" status="" machine="Flatbed" subtext="Flatbed"
                                 v-bind:style="{ backgroundColor: storeState.flatbed.backgroundColor}"></SingleLightFront>
                    <SingleLightFront id="Finishing" status="" machine="Finishing" subtext="Finishing"
                                 v-bind:style="{ backgroundColor: storeState.finishing.backgroundColor}"></SingleLightFront>
            --->

        </div>
    </template>

    <script>
import SingleLightFront from "../components/SingleLightFront.vue";
//  import config from '../config.JSON';

export default {
  name: "FrontEnd",

  components: {
    SingleLightFront
  },

  created() {
    this.timer = setInterval(this.fetchEventsList, 10000);
  },
  data() {
    return {
      timer: "",
      config: { sfBG: "blue" }
    };
  },
  methods: {
    fetchEventsList: function() {
      //   console.log(config.sfBG);
      /*
                    this.$data.hpz.backgroundColor = localStorage.getItem('hpzColor');
                    this.$data.latex.backgroundColor = localStorage.getItem('latexColor');
                    this.$data.flatbed.backgroundColor=localStorage.getItem('flatbedColor');
                    this.$data.finishing.backgroundColor= localStorage.getItem('finishingColor');


                    console.log("sf.backgroundColor " + this.storeState.sf.backgroundColor);
                    */
    },
    cancelAutoUpdate: function() {
      clearInterval(this.timer);
    }
  }
};
</script>

    <style scoped>
#frontEnd {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
