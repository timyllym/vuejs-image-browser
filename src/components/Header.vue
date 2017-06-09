<template>
  <div class='header'>
    <div class='title'>Image Browser</div>
    <div class='tabs'>
      <div class='tab'>
        <router-link to='/trees'>Trees</router-link>
      </div>
      <div class='tab'>
        <router-link to='/lakes'>Lakes</router-link>
      </div>
    </div>
    <div class='info'>
      <a href='https://unsplash.com/'>https://unsplash.com/</a>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  @import '../constants';

  .header {
    background-color: $header-bar-bg-color;
    color: $header-bar-text-color;
    display: flex;
    flex-direction: row;
    flex: 1 1 60px;
    align-items: center;

    .title {
      font-size: 1.6rem;
      font-weight: 700;
      margin-left: 20px;
    }

    .tabs {
      margin-left: 40px;
      display: flex;

      .tab {
        display: flex;
        height: 60px;

        a {
          padding: 0 20px;
          text-decoration: none;
          color: $header-bar-text-color;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          &:hover {
            background-color: $header-bar-tab-hover-bg-color;
          }
          &.router-link-active {
            background-color: $header-bar-tab-active-bg-color;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }

    .info {
      flex: 1 1 auto;
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;

      a {
        text-decoration: none;
        color: $header-bar-text-color;
      }
    }
  }
</style>
