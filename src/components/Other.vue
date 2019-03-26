<template>
  <div>
    <h3>Other</h3>
    <p>This is results: {{ tenResult }}</p>
    <p>This is name results: {{ nameResult }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      // ... Them mapGetters vao ham cumputed JS 2015
      ...mapGetters([
        'tenResult',
        'nameResult'
      ])
    }
  }
</script>
