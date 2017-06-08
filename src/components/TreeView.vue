<template>
  <div>Trees</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      products: 'treeList'
    }),
    methods: mapActions([
      'getTreeList'
    ]),
    mounted () {
      this.$store.dispatch('getTreeList')
    }
  }
</script>
