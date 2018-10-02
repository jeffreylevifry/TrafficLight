
<template>
    <div class="singleLightFront">
        <div class="machineHolder">{{ machine }} </div>
        <div class="statusHolder">
            {{ status }}
        </div>
    </div>
</template>

<script>
export default {
  name: "SingleLightFront",
  props: {
    status: String,
    machine: String,
    subtext: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleLightFront {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: lightgrey;
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
