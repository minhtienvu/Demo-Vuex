<template>
  <div>
    <h3>Result</h3>
    <p>This is results: {{ result }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      result () {
        return this.$store.getters.tenResult
      }
    }
  }
</script>
