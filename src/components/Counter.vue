<template>
  <div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <button class="btn btn-success" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    increment () {
      this.$store.state.result++
    },
    decrement () {
      this.$store.state.result--
    }
  }
}
</script>
