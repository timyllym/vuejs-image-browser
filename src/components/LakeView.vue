<template>
  <div>
    <spinner message='Loading...' is-dark='true' v-if='images.length == 0' class='spinner-box' />
    <div class='thumbnail-group'>
      <div class='thumbnail' v-for='image in images'>
        <img :src='image.url' @click='openImage(image)' />
      </div>
    </div>
    <transition name='open-image'>
      <router-view />
    </transition>
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
      images: 'lakeList'
    }),
    methods: mapActions([
      'getLakeList',
      'openImage'
    ]),
    mounted () {
      this.getLakeList()
    }
  }
</script>

<style lang='scss' scoped>
  .spinner-box {
    margin-left: 20px;
    margin-top: 10px;
  }

  .open-image-enter-active, .open-image-leave-active {
    transition: all .2s ease-out;
  }
  .open-image-enter, .open-image-leave-to {
    transform: scale(0.9, 0.9);
    opacity: 0;
  }
</style>
