<template>
  <div class="app">
    <router-view/>
    <footer-nav/>
  </div>
</template>

<script>
// 
  import FooterNav from "./components/footerNav/footerNav"

export default {
  name: 'App',
  components:{
    FooterNav,
  }
}
</script>

<style scoped lang="stylus">
.app  
    width 100%
    height 100%
    background-color white
</style>
