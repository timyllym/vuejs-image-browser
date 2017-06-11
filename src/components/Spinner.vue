<template>
  <div class='spinner-container'>
    <div :class='{ "spinner": true, "dark": isDark }' />
    <div class='message'>{{ message }}</div>
  </div>
</template>

<script>
  export default {
    props: ['message', 'isDark']
  }
</script>

<style lang='scss' scoped>
  @import '../constants';
  .spinner-container {
    display: inline-block;
    vertical-align: middle;
  }

  .message {
    display: inline-block;
    vertical-align: middle;
    color: $spinner-text-color;
    cursor: default;
  }

  .spinner {
    background-image: url('../images/spinner.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 16px;
    height: 16px;
    margin-left: 0px;
    margin-right: 7px;
    flex: 1 1 auto;
    animation: spin 0.7s linear infinite;
    display: inline-block;
    vertical-align: middle;
    &.hidden {
      display: none;
    }
    &.dark {
      background-image: url('../images/spinner_black.png');
    }
  }

  @keyframes spin { 100% { transform:rotate(360deg); } }
</style>
