<template>
  <div>
    <div class="topbar">
       <div @click="back">
         <div class="arrow_box"><i class="arrow"></i></div>
       </div>
     </div>

    <div class="good_wrapper white">
       <swiper>
          <swiper-slide v-for="(item,index) in goodList">
              <img :src="item.pic[1].src" class="Pic">
          </swiper-slide>
        </swiper>
        <img src="" alt="">
      <div class="info">
        <span class="title">{{goodList[index].title}}</span>
        <p class="price">￥<span class="bigprice">{{goodList[index].price}}</span>&nbsp
            <del>{{goodList[index].origin_price}}</del>
        </p>
        <p class="free">免邮费</p>
        <div>
          <ul>
            <li><img src="http://s11.mogucdn.com/p2/161121/upload_804deld49f8i13gb2gdji12k6h9h2_60x60.png_60x60.webp" alt=""><span>退货补运费</span></li>
            <li><img src="http://s3.mogucdn.com/p2/161121/upload_4c9fi653lcljc0ig512il61jh3ljl_60x60.png_60x60.webp" alt=""><span>全国包邮</span></li>
            <li><img src="http://s3.mogucdn.com/p2/161121/upload_4c9fi653lcljc0ig512il61jh3ljl_60x60.png_60x60.webp" alt=""><span>7天无理由退货</span></li>
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="bottomBar">
        <div><img src="../../assets/images/talk.png" alt=""><span>客服</span></div>
        <div><img src="../../assets/images/star.png" v-show="!goodList[index].isLike" @click.stop.prevent="toggle(index)">
             <img src="../../assets/images/star_y.png" v-show="goodList[index].isLike" @click.stop.prevent="toggle(index)">
             <span>收藏</span>
        </div>
        <div><img src="../../assets/images/xiaodian.jpg" class="xiaodian"><span>小店</span></div>
        <span class="first" @click.stop.prevent="showLayer">加入购物车</span>
        <span class="second" >立即购买</span>
    </div>

    <div class="layer" v-show="layer">
      <div class="darken" @click="hideLayer"></div>
      <div class="meta">
        <div class="meta-top">
          <div class="img-box">
            <img :src="goodList[index].src">
          </div>
          <div class="top-right">
             <p>￥<span class="price">{{goodList[index].price}}</span></p>
             <p>库存<span>11111</span>件</p>
          </div>
          <span @click="hideLayer" class="x">x</span>
        </div>
        
        <p class="num">数量：<br><br><span @click="sub">-</span><span>{{num}}</span><span @click="add" class="red">+</span></p>
        <a href="#" @click.stop.prevent="addToCart">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      layer: false,
      num: 1,
    }
  },
  methods: {
    showLayer() {
      this.layer = true;
    },
    hideLayer() {
      this.layer = false;
    },
    add() {
      return this.num ++;
    },
    sub() {
      return this.num --;
    },
    checkGood (id) {
      // var id = this.$store.state.goodList[this.$store.state.which].id
      var obj = this.$store.state.cart_list
      var flag
      for( let item of obj){
        if( id == item.id){
           flag = true
        }else {
           flag = false
        }
      }return flag
    },
    addToCart() {
      var id = this.$store.state.goodList[this.$store.state.which].id
      var obj = this.$store.state.cart_list
      console.log(this.name)
      if(obj.length == 0) {
        this.$store.commit('addToCart',this.num);
      }else{
        var flag = this.checkGood(id)
        if(flag) {
          this.$store.commit('addToCart2',this.num)
        }else{
          this.$store.commit('addToCart',this.num);
        }
      } 
      this.layer = false;
      Toast('添加成功');
      setTimeout(()=>{this.$router.push({path: '/cartInfo'})},500);
    },
    toggle(index) {
      this.$store.commit('toggle', index);
    },
    back () {
      this.$router.go(-1);
    }
  },
  computed: {
    goodList() {
        return this.$store.state.goodList;
    },
    index() {
      return this.$store.state.which;
    }
  },

  created () {

  }

}
</script>

<style scoped>
.mint-toast-text {
  font-size: 2rem;
}
.Pic {
  width: 100%;
}
.swiper-slide {
  height: 23rem;
}
.white {
  background-color: #fff;
}
.info {
  width: 90%;
  padding-left: 5%;
  padding-top: .6rem; 
}
.title {
  font-size: .9rem;
}
.bigprice {
  font-size: 1.8rem;
}
.price {
  font-size: .7rem;
  color: #000;
  margin-bottom: .6rem;
}
p {
  font-size: .8rem;
  color: #666;
}
.free {
  padding-bottom: .4rem; 
  border-bottom: 1px solid #666;
}
ul {
  display: flex;
  font-size: .75rem;
  margin: .5rem 0;
  color: #666;
}
li {
    display: flex;
    margin-right: .5rem;
    align-items: center;
}
.bottomBar {
  position: fixed;
  bottom: 0;
  height: 2.6rem;
  display: flex;
  background: #fff;
  width: 100%;
  color: #666;
  font-size: .7rem;
}
.bottomBar img {
  width: 1rem;
}
.bottomBar > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  width: 17%;
}
.bottomBar > span {
  line-height: 2.6rem;
  font-size: .8rem;
  width: 24.5%;
  text-align: center;
}
.bottomBar .first {
  background: rgb(255,230,232);
  color: rgb(255,73,139);
}
.bottomBar .second {
  background: rgb(255,73,139);
  color: #fff;
}
.layer {
  position: fixed;
  z-index: 11111;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0,0,0,.2);
}
.layer .meta {
  position: fixed;
  bottom: 0;
  background: #fff;
  height: 17.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.meta img {
  width: 100%;
}
.img-box {
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  position: relative;
  top: -1rem;
  right: -1rem;
}
.meta-top {
  display: flex;
}
.top-right {
  position: relative;
  top: .9rem;
  right: -2rem;
}
.price {
  font-size: 1.5rem;
}
.num {
  margin: .5rem;
}
.num span {
  display: inline-block;
  border: 1px solid #666;
  width: 1.5rem;
  height: 1.3rem;
  text-align: center;
  
}
.red {
  color: rgb(255,74,138);
}
a {
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: rgb(255,74,138);
  text-align: center;
  display: inline-block;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
}
.x {
  position: absolute;
  right: .5rem;
}
.darken {
  height: 17rem;
}
.info img{
  width: 1rem;
}
</style>
