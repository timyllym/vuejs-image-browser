<template>
  <div :class='{ "notification": true,  "is-visible": isOpen }'>
    <div class='message'>{{ message }}</div>
    <div class='close-button' @click='closeNotification'>
      <svg fill='#000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        <path d='M0 0h24v24H0z' fill='none' />
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      message: 'error',
      isOpen: 'notificationOpen'
    }),
    methods: mapActions([
      'closeNotification'
    ])
  }
</script>

<style lang='scss' scoped>
  @import '../constants';
  $animation-time: 0.25s;

  .notification {
    position: fixed;
    bottom: 15px;
    left: 15px;
    z-index: 2;
    background-color: $notification-bg-error-color;
    color: $notification-text-color;
    align-items: center;
    display: flex;
    padding: 5px 10px;
    border-radius: 2px;
    transition: opacity $animation-time linear, transform $animation-time ease-out, visibility 0s linear $animation-time;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100px);
  }

  .is-visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(0px);
    transition-delay: 0s;
    transition-duration: $animation-time;
  }

  .message {
    font-size: 1em;
    max-width: 300px;
    line-height: 1.3em;
    cursor: default;
  }

  .close-button{
    cursor: pointer;
    margin-left: 10px;
    width: 24px;
    height: 24px;
    & svg {
      fill: $notification-text-color;
    }
  }
</style>
