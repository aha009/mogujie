<template>
  <div class="bottom-nav">
    <div class="nav-item">
       <li>
          <router-link to="/">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_6ii829464gk34ai4hkdf14cdea05d_44x44.png" alt="">
            <span>首页</span>
          </router-link>
        </li>
       <li>
          <router-link to="/category">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_0b8i11l822b0adfjaaifl11ig86f1_44x44.png" alt="">
            <span>分类</span>
          </router-link>
       </li>
       <li>
          <a @click.stop.prevent="checkCart">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png" alt="">
            <span>购物车</span>
          </a>
       </li>
       <li>
          <a @click.stop.prevent="isLogin1">
            <img src="https://s2.mogucdn.com/p2/170315/40592144_35ikl8db8a4lfa3f29k8k4b9k3ji2_44x44.png" alt="">
            <span>我的</span>
          </a>
       </li>
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
      },
      isLogin1() {
        if(this.$store.state.isLogin !== true) this.$router.push('mine');
        else this.$router.push('mineInfo');
      }
    }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  font-size: .73rem;

  }
  .nav-item {
    display: flex;
  }
  li {
    width: 25%;
    height: 2.5rem;
    padding-left: 1.55rem;
    padding-top: .25rem;
    display: flex;
  }
  .nav-item img {
    display: block;
    width: 1.1rem;
    padding-left: .18rem;
  }
</style>
