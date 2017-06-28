<template>
     <div class="topbar">
       <div @click="back">
         <div class="arrow_box"><i class="arrow"></i></div>
       </div>
        <span class="topbar tittle">购物车<span v-if="this.num">({{this.num}})</span></span>
        <div class="topbar right">
          <span>编辑</span>
          <a href="#" class="im-talk">
             <i class="talk">&nbsp;&nbsp;</i>
          </a>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }, 
  computed: {
    num () {
      return this.$store.state.cartInfos.total_nums;
    }
  }
  
}
</script>
<style scoped>
@import "../../assets/css/topbar.css";

</style>
