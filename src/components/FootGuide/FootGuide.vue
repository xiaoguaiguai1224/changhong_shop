<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/home' === $route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-icon_nomemo"></i>
      </span>
      <span>外卖</span>
    </span>
    <a class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
      <span class="item_icon"><i class="iconfont icon-shuiguo"></i></span>
      <span>查询</span>
    </a>
    <a class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
      <span class="item_icon"><i class="iconfont icon-icon-test"></i></span>
      <span>订单</span>
    </a>
    <a class="guide_item" :class="{on: '/person' === $route.path}" @click="goTo('/person')">
      <span class="item_icon"><i class="iconfont icon-liangdu"></i></span>
      <span>个人中心</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path) // 关注replace()、 push()和go()的区别
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont {
          font-size 22px;
        }
</style>
