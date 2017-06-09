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
      images: 'treeList'
    }),
    methods: mapActions([
      'getTreeList'
    ]),
    mounted () {
      this.$store.dispatch('getTreeList')
    }
  }
</script>
