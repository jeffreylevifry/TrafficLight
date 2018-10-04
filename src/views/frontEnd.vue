<template>
    <div id="frontEnd">
        <SingleLightFront id="SmallFormat" status="" machine="Small Format" subtext="Small Format"
                          v-bind:style="{ backgroundColor: sf.backgroundColor }"></SingleLightFront>
                    <SingleLightFront id="6100" status="" machine="HP z6100" subtext="Large Format"
                                 v-bind:style="{ backgroundColor: hpz.backgroundColor }"></SingleLightFront>
                    <SingleLightFront id="360" status="" machine="HP 360 Latex" subtext="Large Format Outdoor"
                                 v-bind:style="{ backgroundColor: latex.backgroundColor }"></SingleLightFront>
                    <SingleLightFront id="Flatbed" status="" machine="Flatbed" subtext="Flatbed"
                                 v-bind:style="{ backgroundColor: flatbed.backgroundColor }"></SingleLightFront>
                    <SingleLightFront id="Finishing" status="" machine="Finishing" subtext="Finishing"
                                 v-bind:style="{ backgroundColor: finishing.backgroundColor }"></SingleLightFront>
        </div>
    </template>

    <script>
import SingleLightFront from "../components/SingleLightFront.vue";
import {sfBg} from '../firebase';
import {hpzBg} from '../firebase';
import {latexBg} from '../firebase';
import {flatbedBg} from '../firebase';
import {finishingBg} from '../firebase';

export default {
    name: "FrontEnd",

    components: {
        SingleLightFront
    },

    methods: {
      changeSF: function() {
              var self = this;
      sfBg.on("value",(function(snapshot) {
                 var color1 =  snapshot.val();
                 self.sf.backgroundColor = color1;
         }));     
      },
      changeHPZ: function() {
              var self = this;
      hpzBg.on("value",(function(snapshot) {
                 var color1 =  snapshot.val();
                 self.hpz.backgroundColor = color1;
         }));     
      },
     changeLATEX: function() {
              var self = this;
      latexBg.on("value",(function(snapshot) {
                 var color1 =  snapshot.val();
                 self.latex.backgroundColor = color1;
         }));     
      },
      changeFLATBED: function() {
              var self = this;
      flatbedBg.on("value",(function(snapshot) {
                 var color1 =  snapshot.val();
                 self.flatbed.backgroundColor = color1;
         }));     
      },
     changeFINISHING: function() {
              var self = this;
      finishingBg.on("value",(function(snapshot) {
                 var color1 =  snapshot.val();
                 self.finishing.backgroundColor = color1;
         }));     
      }

    },

    created() {
 
      this.changeSF();
      this.changeHPZ();
      this.changeLATEX();
      this.changeFINISHING();
      this.changeFLATBED();      
      
    },

    watch:{
      color1(){
        console.log("XXXXXnewColor watcher fired");
      }
    },
    data() {

        return {

            sf:{backgroundColor: ''},
            hpz:{backgroundColor: ''},
            latex:{backgroundColor: ''},
            flatbed:{backgroundColor: ''},
            finishing:{backgroundColor: ''},
            }; 
    }


}

</script>

<style scoped > #frontEnd {
        background - color: #ffffff;
        border: 1 px solid# cccccc;
        padding: 20 px;
        margin - top: 10 px;
    } <
    /style>