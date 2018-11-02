<template>
    <div id="secure">

        <SingleLight id="SmallFormat" status="" machine="Small Format" subtext="Small Format"
        image="http://jeffreylevifry.com/TrafficLight/assets/TL_SF_ICON.svg"
                     v-on:change-color="changeSF" v-bind:style="{ backgroundColor: sf.backgroundColor }">
                     </SingleLight>
    <SingleLight id="6100" status="" machine="HP z6100" subtext="Large Format"
    image='http://jeffreylevifry.com/TrafficLight/assets/TL_HP6100_ICON.svg' 
                 v-on:change-color="change6100" v-bind:style="{ backgroundColor: hpz.backgroundColor}"></SingleLight>
    <SingleLight id="360" status="" machine="HP 360 Latex" subtext="Large Format Outdoor"
    image='http://jeffreylevifry.com/TrafficLight/assets/TL_360_ICON.svg' 
                 v-on:change-color="change360" v-bind:style="{ backgroundColor: latex.backgroundColor}"></SingleLight>
    <SingleLight id="Flatbed" status="" machine="Flatbed" subtext="Flatbed"
    image="http://jeffreylevifry.com/TrafficLight/assets/TL_350_ICON.svg"
                 v-on:change-color="changeFlatbed" v-bind:style="{ backgroundColor: flatbed.backgroundColor}"></SingleLight>
    <SingleLight id="Finishing" status="" machine="Finishing" subtext="Finishing"
    image="http://jeffreylevifry.com/TrafficLight/assets/TL_FINISHING_ICON.svg"
                 v-on:change-color="changeFinishing" v-bind:style="{ backgroundColor: finishing.backgroundColor}"></SingleLight>
    </div>
</template>

<script>
import SingleLight from "../components/SingleLight.vue";
import {db} from "../firebase";


export default {
  name: "Secure",

  components: {
    SingleLight
  },

  data() {
    return {
      sf:{backgroundColor:""},
      hpz: { backgroundColor: "" },
      latex: { backgroundColor: "" },
      flatbed: { backgroundColor: "" },
      finishing: { backgroundColor: "" }
      
    };
  },

  methods: {
    changeSF: function(newColor) {
      this.$data.sf.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/sf").set({
       backgroundColor: newColor,
      status: newStatus
}); 
    },
    
    change6100: function(newColor) {
      this.$data.hpz.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/hpz").set({
       backgroundColor: newColor,
      status: newStatus
       });
    },
    change360: function(newColor) {
      this.$data.latex.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/latex").set({
       backgroundColor: newColor,
      status: newStatus
       });
    },
    changeFlatbed: function(newColor) {
      this.$data.flatbed.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/flatbed").set({
       backgroundColor: newColor,
      status: newStatus
       });
    },
    changeFinishing: function(newColor) {
      this.$data.finishing.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/finishing").set({
       backgroundColor: newColor,
      status: newStatus
       });
    },
     getStatus: function(color){
      var str1 = color;
      var red = "red";
      var blue = "#3fa9f5";
      var grey = "lightgrey";
      var green = "#00b058";
      var yellow = "#ffff00";
      console.log("color = "+color);
      if(str1.localeCompare(red)===0){ //red
        return "HEAVY";
      }if(str1.localeCompare(blue)===0){ //blue
        return "SPECIAL";
      }if(str1.localeCompare(grey)===0){
        return "OFFLINE";
      } if(str1.localeCompare(green)===0){ //green
        return "LITE";
      }if(str1.localeCompare(yellow)===0){ //yellow
        return "MEDIUM";
      }else{return "ERROR"}

    }
  }
};
</script>

<style scoped>

#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 10px;
  margin-top: 10px;
}
</style>
