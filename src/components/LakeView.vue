<template>
  <div>Lakes</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      products: 'lakeList'
    }),
    methods: mapActions([
      'getLakeList'
    ]),
    mounted () {
      this.$store.dispatch('getLakeList')
    }
  }
</script>
