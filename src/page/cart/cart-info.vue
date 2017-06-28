<template>
  <div>
    <cartTop></cartTop>
    <div class="choosenList">
      <div class="choosengood" v-for="(item,index) in goods" @click="check(index)">
        <div class="header">{{item.shop}}</div>
        <div class="flex">
          <div class="radio" :class="{checked:item.isChecked}" > </div>
          <div class="img-box">
            <img :src="item.src">
          </div>
          <div>
            <div>
              <p class="title">{{item.title}}</p>
            </div>
            <div>
              <span>￥{{item.price}}</span><span class="c666"><del>{{item.origin_price}}</del></span><span></span>
              <span class="c666">x{{item.num}}</span>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="radio"></div>
      <span> 少花点钱吧</span>

    </div>
  </div>
</template>
<script>
import cartTop from "./cart-top"
export default {
  data() {
    return {
      
    }
  },
  computed: {
    goods () {
      return this.$store.state.cart_list;
    },
   
  },
  methods: {
    check (index) {
      this.$store.commit('check',index);
    }
  },
  components: {
    cartTop
  }
  }
</script>
<style scoped>
.flex {
  display: flex;
  padding-top: .8rem;
}
.header {
  font-size: .9rem;
  color: #666;
  border-bottom: 1px solid #ccc;
  padding: .25rem 1rem;
}
.radio {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #333;
  margin-top: 2rem;
  margin-left: 1rem;
}
.img-box {
  width: 4rem;
  height: 5.2rem;
  overflow: hidden;
  margin: 0 1rem; 

}
img {
  width: 5rem;
}
.choosengood {
  background-color: #fff;
  margin-top: 1rem;
  height: 8.5rem;
  border: 1px solid #ddd;
}
.title {
  font-size: .8rem;
}
.c666 {
  font-size: .6rem;
  color: #666;
}
.title {
  width: 10rem;
}
.bottom {
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  font-size: .75rem;
  display: flex;
}
.bottom .radio {
  margin: .7rem;
  display: flex;
}
.bottom span {
  line-height: 2.5rem;
}
.checked {
  background-color: rgb(249,85,120);
}
</style>
