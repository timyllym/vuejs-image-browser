<template>
  <div class='app'>
    <header-bar />
    <router-view />
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  export default {
    components: {
      'header-bar': HeaderBar
    }
  }
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700,600');

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    font-family: 'Titillium Web';
  }
</style>

<style lang='scss' scoped>
  .app {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
</style>
