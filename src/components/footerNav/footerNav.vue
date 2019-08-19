<template>
  <div class="footer_nav">
      <router-link to="/miste"  class="nav " :class="{on:'/miste'===$route.path}">
        <span class="iconfont  icon-shouye"></span>
         <span>首页</span>
      </router-link>
      <router-link to="/order" class="nav" :class="{on:'/order'===$route.path}">
        <span class="iconfont  icon-search"></span>
         <span>搜索</span>
      </router-link>
     
      <router-link to="/search" class="nav" :class="{on:'/search'===$route.path}">
        <span class="iconfont  icon-dingdan"></span>
         <span>订单</span>
      </router-link>
     
      <router-link to="/profile" class="nav" :class="{on:'/profile'===$route.path}">
        <span class="iconfont icon-wode"></span>
         <span>我的</span>
      </router-link>
     

  </div>
</template>

<script>
export default {
    name:"FooterNav"
}

</script>

<style scoped lang="stylus">
.footer_nav
  position fixed
  left 0
  bottom 0
  z-index 100
  width 100%
  height .5rem
  border-top .01rem solid #999
  background-color #eee
  display flex
  justify-content space-around
  .nav
    color #999
    display flex
    flex-direction column
    flex 1
    display block
    align-items center
    text-align center
    span 
      display block
      margin .06rem
    span:nth-child(2n-1)
      font-size .18rem
  .on
    color green
    
</style>