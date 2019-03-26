<template>
  <div>
    <h3>Other</h3>
    <p>This is results: {{ result }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      result () {
        return this.$store.state.result;
      }
    }
  }
</script>
