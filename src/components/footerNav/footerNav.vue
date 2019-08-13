<template>
  <div class="footer_nav">
      <router-link to="/">
        <i class="iconfont  icon-shouye"></i>
         <span>首页</span>
      </router-link>
      <router-link to="/order">
        <i class="iconfont  icon-search"></i>
         <span>搜索</span>
      </router-link>
     
      <router-link to="/search">
        <i class="iconfont  icon-dingdan"></i>
         <span>订单</span>
      </router-link>
     
      <router-link to="/profile">
        <i class="iconfont icon-wode"></i>
         <span>我的</span>
      </router-link>
     

  </div>
</template>

<script>
export default {
    name:"FooterNav"
}

</script>

<style>

</style>