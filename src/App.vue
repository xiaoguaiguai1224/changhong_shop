<template>
  <div id="app">
    <!-- 分为路由部分和组件部分 -->
    <router-view></router-view>
    <!-- $route 表示当前路由 -->
    <FootGuide v-show="$route.meta.showFooter"></FootGuide>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>
<!-- 以下是stylus的语法 -->
<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
