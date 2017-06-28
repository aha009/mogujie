<template>
  <div class="mine mine-wrapper">
    <div class="topbar">
      <router-link to="/">
        <div class="arrow_box"><i class="arrow"></i></div>
      </router-link>
        <span class="topbar tittle">登录</span>
        <div class="topbar right">
          <span class="edit">忘记密码</span>
        </div>
     </div>
     <div class="mine mine-content">
        <div>
          <p>蘑菇街账号</p>
          <input type="text" placeholder="随便输点什么吧~" v-model="username">
        </div>
        <div>
          <p>密码</p>
          <input type="password" placeholder="输入密码" v-model="password">
        </div>
        <button class="button" @click.stop.prevent="login">登录</button>
    
        <div class="login">
          <a href="#">免密登录</a>
          <a href="#" class="color-h">注册账号</a>
        </div>
        <a class="qq" ></a>
     </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(username) {
      if(this.username !== '' && this.password !== '') {
        this.$store.commit('userInfo', this.username);
        this.$router.push('mine-info');
      }
    }

  }
  
}
</script>

<style scoped>
@import "../../assets/css/topbar.css";
.arrow_box {
  border-bottom: 1px solid #999;
}
.mine {
  background: #fff;
  width: 100%;
  height: 100vh;
  margin-bottom: -4.6rem;
  overflow: hidden;
}
.topbar .tittle {
   font-weight: bold;
}
.mine a {
  color: #888;
  font-size: .8rem;
}
.mine p {
  font-size: .8rem;
  margin: .5rem;
}
.mine input {
  font-size: 1.25rem;
  border: none;
  text-align: center;
  outline: none;
  border-bottom: 1px solid #666;
  padding: .4rem 0;
  background: #fff;
}

.mine-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 1.6rem;
  
}
.login {
  display: flex;
  width: 80%;
  justify-content: space-between;
}
.qq {
  display: block;
  background: url(https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png) no-repeat; 
  background-size: 95%;
  width: 6.1rem; 
  margin: 0px auto;
  height: 6.1rem;
  position: absolute;
  bottom: 7rem;
}
.color-h {
  color: rgb(255,24,119) !important;
}
.button {
  width: 80%;
  background: rgb(255,24,119);
  color: #fff !important;
  margin: 1rem 0;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem !important;
}
</style>
