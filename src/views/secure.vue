<template>
  <div id="secure">
    <SingleLight
      id="SmallFormat"
      status=""
      machine="Small Format"
      subtext="Small Format"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_SF_ICON.svg"
      v-on:change-color="changeSF"
      v-bind:style="{ backgroundColor: sf.backgroundColor }"
    >
    </SingleLight>
    <SingleLight
      id="6100"
      status=""
      machine="HP z6100"
      subtext="Large Format"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_HP6100_ICON.svg"
      v-on:change-color="change6100"
      v-bind:style="{ backgroundColor: hpz.backgroundColor }"
    ></SingleLight>
    <SingleLight
      id="360"
      status=""
      machine="HP 360 Latex"
      subtext="Large Format Outdoor"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_360_ICON.svg"
      v-on:change-color="change360"
      v-bind:style="{ backgroundColor: latex.backgroundColor }"
    ></SingleLight>
    <SingleLight
      id="Lfbw"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_LFBW_ICON.svg"
      status=""
      machine="Large Format B&W"
      subtext="BLUEPRINTS, DRAWINGS, PLANS, BACKDROPS"
      v-on:change-color="changeLfbw"
      v-bind:style="{ backgroundColor: lfbw.backgroundColor }"
    ></SingleLight>

    <SingleLight
      id="Flatbed"
      status=""
      machine="Flatbed"
      subtext="Flatbed"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_350_ICON.svg"
      v-on:change-color="changeFlatbed"
      v-bind:style="{ backgroundColor: flatbed.backgroundColor }"
    ></SingleLight>

    <SingleLight
      id="Finishing"
      status=""
      machine="Finishing"
      subtext="Finishing"
      image="http://jeffreylevifry.com/TrafficLight/assets/TL_FINISHING_ICON.svg"
      v-on:change-color="changeFinishing"
      v-bind:style="{ backgroundColor: finishing.backgroundColor }"
    ></SingleLight>
  </div>
</template>

<script>
import SingleLight from "../components/SingleLight.vue";
import { db } from "../firebase";
import { sfBg } from "../firebase";
import { hpzBg } from "../firebase";
import { latexBg } from "../firebase";
import { flatbedBg } from "../firebase";
import { finishingBg } from "../firebase";
import { lfbwBg } from "../firebase";

export default {
  name: "Secure",

  components: {
    SingleLight
  },

  methods: {
    setColors: function() {
      var self = this;
      sfBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.sf.backgroundColor = color1;
        self.sfstatus = self.getStatus(color1);
      });
      hpzBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.hpz.backgroundColor = color1;
        self.hpzstatus = self.getStatus(color1);
      });
      latexBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.latex.backgroundColor = color1;
        self.latexstatus = self.getStatus(color1);
      });
      flatbedBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.flatbed.backgroundColor = color1;
        self.flatbedstatus = self.getStatus(color1);
      });
      finishingBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.finishing.backgroundColor = color1;
        self.finishingstatus = self.getStatus(color1);
      });
      lfbwBg.on("value", function(snapshot) {
        var color1 = snapshot.val();
        self.lfbw.backgroundColor = color1;
        self.lfbwstatus = self.getStatus(color1);
      });
    },

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
    changeLfbw: function(newColor) {
      this.$data.lfbw.backgroundColor = newColor;
      var newStatus = this.getStatus(newColor);
      db.ref("lanes/lfbw").set({
        backgroundColor: newColor,
        status: newStatus
      });
    },

    getStatus: function(color) {
      var str1 = color;
      var red = "red";
      var blue = "#3fa9f5";
      var grey = "lightgrey";
      var green = "#00b058";
      var yellow = "#ffff00";
      if (str1.localeCompare(red) === 0) {
        //red
        return "HEAVY";
      }
      if (str1.localeCompare(blue) === 0) {
        //blue
        return "SPECIAL";
      }
      if (str1.localeCompare(grey) === 0) {
        return "OFFLINE";
      }
      if (str1.localeCompare(green) === 0) {
        //green
        return "LITE";
      }
      if (str1.localeCompare(yellow) === 0) {
        //yellow
        return "MEDIUM";
      } else {
        return "ERROR";
      }
    }
  },
  created() {
    this.setColors();
  },

  data() {
    return {
      sfstatus: "",
      hpzstatus: "",
      latexstatus: "",
      lfbwstatus: "",
      flatbedstatus: "",
      finishingstatus: "",
      sf: { backgroundColor: "" },
      hpz: { backgroundColor: "" },
      latex: { backgroundColor: "" },
      flatbed: { backgroundColor: "" },
      finishing: { backgroundColor: "" },
      lfbw: { backgroundColor: "" }
    };
  }
};
</script>

<style scoped>
#secure {
  background-color: #e9e9e9;
  //border: 1px solid #cccccc;
  padding: 8px;
}

@media screen and (max-width: 700px) {
  #secure {
    width: 100%;
  }
}
</style>
