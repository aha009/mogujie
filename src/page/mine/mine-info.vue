<template>
  <div class="mine-info wrapper">
    <div class="user">
      <div class="avatar"><img src="../../assets/images/avatar.jpg" alt=""></div>
      <div class="user-info">
        <div class="username">{{username}}</div>
      </div>
    </div>
    <div class="myorder">
      <div class="myorder tittle">
        <div>
          <img src="https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png" alt="">
          <span >我的订单</span>
        </div>
        <div class="arrow0">></div>
      </div>
      <div class="myorder info">
        <ul>
          <li v-for="order in orderInfo">
              <img :src="order.src" alt="">
              <p>{{order.desc}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="middleList">
        <ul>
          <li v-for="item in middleList">
              <a href="#">
                <img :src="item.src" alt="">
                <div>
                  <span>{{item.tittle}}</span>
                  <div class="arrow0">></div>
                </div>
              </a>    
          </li>
        </ul>
    </div>

    <div class="bottomList">
      <ul>
          <li v-for="item in bottomList">
            <a href="#">
            <img :src="item.src" alt="">
            <div>
              <span>{{item.tittle}}</span>
              <div class="arrow0">></div>
            </div>
            </a>
          </li>
        </ul>
    </div>
    <router-link class="button" to="/">退出登录</router-link>
    <bottom-nav></bottom-nav>
  </div>
  
</template>

<script>
import BottomNav from '@/public/BottomNav'
export default {
  data() {
    return {
      orderInfo: [
        {
          desc: '待付款',
          src: 'https://s10.mogucdn.com/p1/160829/idid_ifqwcmddgrswkzdbmezdambqgyyde_38x33.png'
        },
        {
          desc: '待收货',
          src: 'https://s10.mogucdn.com/p1/160829/idid_ie4dcoddmnswkzdbmezdambqgiyde_38x36.png'
        },
        {
          desc: '待评价',
          src: 'https://s10.mogucdn.com/p1/160830/idid_ie4gimztheygcmdcmezdambqgiyde_38x36.png'
        },
        {
          desc: '售后',
          src: 'https://s10.mogucdn.com/p1/160829/idid_ie3wezbvhbtgkzdbmezdambqgayde_38x35.png'
        }
      ],
      middleList: [
        {
          tittle: '我的购物车',
          src: '//s6.mogucdn.com/p2/161130/159_0ihj4c5a23kabh84ka8dfhl552dla_56x56.png'
        },
        {
          tittle: '我的拼团',
          src: '//s2.mogucdn.com/mlcdn/c45406/170419_7c5a4j17k0061bg4kiagf9lc69fe8_56x56.png'
        },
        {
          tittle: '我的优惠券',
          src: '//s10.mogucdn.com/p2/160822/159_00ijba9e46e13970ec7kakll8a06a_56x56.png'
        },
        {
          tittle: '我收藏的商品',
          src: '//s16.mogucdn.com/p1/160727/upload_ifqtsndeg43gkmrqmezdambqgyyde_56x56.png'
        },
        {
          tittle: '我收藏的店铺',
          src: '//s17.mogucdn.com/p1/160727/upload_ie4wmy3gmq3wkmrqmezdambqgqyde_56x56.png'
        }
      ],
      bottomList: [
        {
          tittle: '消息通知',
          src: '//s16.mogucdn.com/p1/160727/upload_ie4tgm3ege4wkmrqmezdambqgqyde_56x56.png'
        },
        {
          tittle: '客服',
          src: '//s16.mogucdn.com/p1/160307/idid_ifrtqmdfgztggnzsg4zdambqhayde_84x84.png'
        },
        {
          tittle: '意见反馈',
          src: '//s17.mogucdn.com/p1/160727/upload_ifrdonbugezgkmrqmezdambqmeyde_56x56.png'
        }

      ]
    }
   },
   computed: {
    username() {
        return this.$store.state.username;
    }
  },
   components: {
     BottomNav
   }
  
}
</script>

<style scoped>
img {
  width: 1.4rem;
  height: 1.4rem;
  padding-right: .5rem;
}
.username {
  color: #000;
  font-size: 1rem;
}
.mine-info {
  color: #333;
  font-size: .9rem;
}
.user {
  display: flex;
  background: #fff;
  padding: 1.5rem 0 0 1.5rem;
}
.avatar {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  margin-right: 1.5rem;
}
.avatar > img { 
  width: 100%;
  height: 100%;
}
.user ,.myorder ,.middleList, .buttomList {
  background: #fff;
}
.user {
  height: 4rem;
  margin-bottom: .5rem;
}
.resume {
  font-size: .8rem;
  color: #666;
}
.myorder .tittle {
  display: flex;
  justify-content: space-between;
  padding: .5rem; 
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.tittle >div {
  display: flex;
  align-items: center;
}
.arrow0 {
  color:#ccc;
}
.info > ul {
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
  padding: .55rem 0;
  margin-bottom: .5rem;
}

.info li img {
  width: 45%;
  height: 45%;
  padding-left: .5rem;
}
.middleList ,.bottomList {
  display: flex;
  flex-direction: column;
}
.middleList a {
  display: flex;
  flex-direction: row;
  padding: .6rem;

}
.middleList a >div {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ccc;
  width: 100%;
  justify-content: space-between;
  padding-bottom: .5rem;
}
.bottomList {
  background: #fff;
  margin-top: .5rem;
}
.bottomList a {
  display: flex;
  flex-direction: row;
  padding: .6rem;

}
.bottomList a >div {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  width: 100%;
  justify-content: space-between;
}
.button {
  display: inline-block;
  width: 84%;
  background: #ff5777;
  color: #fff !important;
  margin: 1rem 0;
  height: 2.2rem;
  line-height: 2.2rem;
  font-size: .8rem !important;
  border-radius: 4px;
  text-align: center;
  margin-left: 8%;
}
</style>
