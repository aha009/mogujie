// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store' 
import Vuex from 'vuex'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex)
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  data: {},
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
    // created() {
    // this.checkLogin();
  // }
  // methods:{
  //   checkLogin(){
  //     //检查是否存在session
  //     //cookie操作方法在源码里有或者参考网上的即可
  //     if(!this.getCookie('session')){
  //       //如果没有登录状态则跳转到登录页
  //       this.$router.push('/login');
  //     }else{
  //       //否则跳转到登录后的页面
  //       this.$router.push('/user_info');
  //     }
  //   }
  // }
})


