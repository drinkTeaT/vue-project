<template>
  <div>
    <button @click="clickButton()">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickButton: function () {
      this.count++
      this.$emit('mmmmmm', this.count)
    }
  }
}
</script>

<style scoped>

</style>
