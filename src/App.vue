<template>
  <div class='app'>
    <header-bar />
    <router-view />
    <notification />
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  import Notification from './components/Notification.vue'
  export default {
    components: {
      'header-bar': HeaderBar,
      'notification': Notification
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

  .thumbnail-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .thumbnail {
    width: 200px;
    height: 150px;
    margin: 20px 0 0 20px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 0;
    }
  }
</style>

<style lang='scss' scoped>
  .app {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }
</style>
