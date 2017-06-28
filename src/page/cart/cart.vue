<template>
  <div>
    <cartTop></cartTop>
    <div class="cart-content">
      <p class="round"><image class="ico-cart" src="../assets/images/cart.png"></image></p>
      <p class="reminder">购物车还是空的哦~</p>
      <router-link class="back" to="/">去逛逛</router-link> 
    </div>
  </div>
</template>

<script>
import cartTop from "./cart-top"
import { mapGetter } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  components: {
    cartTop
  }
  
}
</script>
<style scoped>
@import "../../assets/css/topbar.css";
.cart-content {
  display: flex;
  height: 100vh;
  margin-top: -2.4rem;
   margin-bottom: -2.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.round {
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background: #DDD5D7;
}
.round .ico-cart {
  width: 7rem;
  height: 7rem;
}

.cart-content .reminder {
  color: #666;
  font-size: .83rem;
}
.reminder{
  margin: .7rem 0;
}
.back {
  width: 5.2rem;
  height: 1.8rem;
  background: #ff5777;
  color: white !important;
  font-size: .81rem;
  border-radius: .25rem;
  text-align: center;
  line-height: 1.8rem;
}
.cart-wrapper p {
  margin-bottom: 30px;
}
</style>
