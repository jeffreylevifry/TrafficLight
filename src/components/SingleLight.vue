<template>
    <div class="singleLight">
    <div class="imageHolder"><img v-bind:src=image /> </div> 
        <div class="machineHolder">{{ machine }} </div>
        <div class="buttonHolder">
        <button id="lite" v-on:click="$emit('change-color', '#00b058')">LITE</button>
        <button id="medium" v-on:click="$emit('change-color', '#ffff00')">MEDIUM</button>
        <button id="heavy" v-on:click="$emit('change-color', 'red')">HEAVY</button>
        <button id="special" v-on:click="$emit('change-color', '#3fa9f5')">SPECIAL</button>
        <button id="offline" v-on:click="$emit('change-color', 'lightgrey')">OFFLINE</button>
        </div>
        <div class="statusHolder">{{ status }}</div>
    </div>
    
</template>

<script>
export default {
  name: "SingleLight",
  props: {
    status: String,
    machine: String,
    subtext: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleLight{
    font-size: 24px;
  font-weight: 900;
  color:black;

}
.imageHolder{
  float: left;
  padding-left: 10px;
  width: 100px;

}

img {
  display: block;
  max-width:90px;
  max-height:90px;
  width: auto;
  height: auto;
}
#lite{
  background-color:#00b058;
}
#medium{
  background-color:#ffff00;
}
#heavy{
  background-color:red;
}
#special{
  background-color:#3fa9f5;
}
#offline{
  background-color:lightgrey;
}
button{
  border: none;
  margin-left:10px;
  font-size: 13px;
  font-weight:900;
  width:80px;
  height:80px;
  background-color:rgba(255, 255, 255, 0.17);
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
}

.singleLight {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100px;
}
.machineHolder {
  float: left;
  width: 25%;
  text-align: left;
  height: 70px;
  letter-spacing:0px;
  margin-top: 17px;
  padding-bottom: 10px;
  font-size: 37px;
}
.statusHolder {
  float: left;
  width: 33px;
  text-align: right;
  height: 50px;
  padding-bottom: 10px;
  padding-right: 20px;

}
.buttonHolder {
  margin-bottom:10px;
  margin-top:10px;
  float: right;
  width: 55%;
  height: 60px;
  padding-bottom: 10px;
}
</style>
