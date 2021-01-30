<template>
  <div>
   组件A: {{ count }}
  </div>
</template>

<script>
export default {
  props:["count"],
  name: "ComponentA",
  data() {
    return {
    }
  },
  methods: {
    clickButton: function () {
      //  获取B组件的参数

    }
  }
}
</script>

<style scoped>

</style>
