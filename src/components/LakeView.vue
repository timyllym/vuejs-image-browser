<template>
  <div class='image-group'>
    <div class='image-container' v-for='image in images'>
      <img :src='image.url' />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      images: 'lakeList'
    }),
    methods: mapActions([
      'getLakeList'
    ]),
    mounted () {
      this.$store.dispatch('getLakeList')
    }
  }
</script>
