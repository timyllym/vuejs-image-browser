<template>
  <div>
    <spinner message='Loading...' is-dark='true' v-if='images.length == 0' class='spinner-box' />
    <div class='thumbnail-group'>
      <div class='thumbnail' v-for='image in images'>
        <img :src='image.url' @click='openImage(image)' />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Spinner from './Spinner.vue'

  export default {
    components: {
      'spinner': Spinner
    },
    computed: mapGetters({
      images: 'imageList'
    }),
    methods: mapActions([
      'getTreeList',
      'openImage'
    ]),
    mounted () {
      this.getTreeList()
    }
  }
</script>

<style lang='scss' scoped>
  .spinner-box {
    margin-left: 20px;
    margin-top: 10px;
  }
</style>
