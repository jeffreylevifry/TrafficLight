<template>
    <div class="singleLight">
        <div class="machineHolder">{{ machine }} </div>
        <div class="statusHolder">{{ status }}
        <button v-on:click="$emit('change-color', 'green')">Green</button>
        <button v-on:click="$emit('change-color', 'yellow')">Yellow</button>
        <button v-on:click="$emit('change-color', 'red')">Red</button>
        <button v-on:click="$emit('change-color', 'blue')">Blue</button>
        <button v-on:click="$emit('change-color', 'grey')">Offline</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "SingleLight",
  props: {
    status: String,
    machine: String,
    subtext: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleLight {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100px;
}
.machineHolder {
  float: left;
  width: 30%;
  height: 50px;
  padding-bottom: 10px;
}
.statusHolder {
  float: none;
  width: 30%;
  height: 50px;
  padding-bottom: 10px;
}
.subtextHolder {
  float: right;
  width: 30%;
  height: 50px;
  padding-bottom: 10px;
}
</style>
