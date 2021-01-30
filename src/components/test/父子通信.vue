<template>
  <div>
    https://www.cnblogs.com/shengnan-2017/p/10419050.html
    <ComponentB @mmmmmm="valueOfB"></ComponentB>
    <ComponentB></ComponentB>
    <ComponentA :count=dataOfb></ComponentA>
    {{ dataOfb }}
  </div>
</template>

<script>
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default {
  name: "父子通信",
  components: {ComponentA, ComponentB},
  data() {
    return {
      dataOfb: ''
    }
  },
  methods: {
    valueOfB(data, data1) {
      this.dataOfb = data + data1
    }
  }
}
</script>

<style scoped>

</style>
