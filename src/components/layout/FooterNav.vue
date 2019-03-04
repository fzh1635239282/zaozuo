<template>
  <div class="app-footer-nav">
      <router-link to="home" class="r-link">首页</router-link>
      <router-link to="classify" class="r-link">分类</router-link>
      <router-link to="found" class="r-link">发现</router-link>
      <router-link to="cart" class="r-link">购物车</router-link>
      <router-link to="mine" class="r-link">我的</router-link>
  </div>
</template>

<script>

export default {
}
</script>
<style lang="stylus">
.app-footer-nav
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 0.9rem
    background rgba(242,242,242,1)
    .r-link
        flex 1
</style>