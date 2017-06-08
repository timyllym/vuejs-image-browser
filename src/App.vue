<template>
  <section class="app">
    <header-bar />
    <router-view />
  </section>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  export default {
    components: {
      'header-bar': HeaderBar
    }
  }
</script>
