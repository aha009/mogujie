<template>
  <div class="ctgy_wrapper">
    <div class="ctgy_searchbar">
       <SearchBar></SearchBar>
     </div>
    <div class="ctgy_wrapper container">
      <sidebar></sidebar>
      <router-view class="r-v"></router-view>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '@/public/BottomNav'
import sidebar from '@/public/sidebar'
import SearchBar from '@/public/SearchBar'
export default {
  data() {
    return {
      
    }
  },
  components: {
    SearchBar,
    sidebar,
    BottomNav
  }
  
}
</script>

<style scoped>
 .ctgy_wrapper .container {
   display: flex;
 }
 .ctgy_searchbar {
   position: fixed;
   width: 100%;
 }
 .ctgy_wrapper .container .r-v {
   padding-top: 3.4rem;
   margin-left: 25%;
 }
</style>
