<template>
  <div>
    <p>This is name results: {{ nameResult }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      // ... Them mapGetters vao ham cumputed JS 2015
      ...mapGetters([
        'nameResult'
      ])
    }
  }
</script>
