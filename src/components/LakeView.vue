<template>
  <div>
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

  export default {
    computed: mapGetters({
      images: 'imageList'
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
