<template>
  <div class="wrapper">
    <div class="SearchBar">
        <a href="#" class="im-talk"><i class="talk">&nbsp;&nbsp;</i></a>
        <mt-search v-model="value" cancel-text="取消" placeholder="    露肩短袖t恤">
        </mt-search>
        <a @click.stop.prevent="checkCart"><i class="cart">&nbsp;&nbsp;</i></a>
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
    checkCart() {
        if(this.$store.state.cartInfos.total_nums == 0) this.$router.push('cart');
        else this.$router.push('cartInfo');
      }
  }
  
}
</script>

<style>
    @import "../assets/css/SearchBar.css";
</style>
