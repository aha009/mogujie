import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({ 
    state: {
        goodList: [],
        which: 0,
        cartInfos: {
            total_price: 0,
            total_nums: 0
        },
        cart_list: [],
        isLogin: false,
        username: '',
        quantity: 0
    },
    
    mutations: {
        signin: state => state.isLogin = true,
        signout: state => state.isLogin = false,
        
        obtain (state, data) {
            state.goodList = data
        },
        which (state, data) {
            state.which = data
        },
        toggle(state,index) {
            state.goodList[index].isLike = !state.goodList[index].isLike 
            if(state.goodList[index].isLike === true){
                state.goodList[index].likes_num++;
            } else{
                state.goodList[index].likes_num--;
            }
        },
        addToCart (state,num) {
            state.cart_list.push(state.goodList[state.which]);
            state.cartInfos.total_nums += num ;
            state.cartInfos.total_price += num * state.goodList[state.which].price;
            state.cart_list[state.which].num = num;
        },
        userInfo(state,name) {
            state.isLogin = true;
            state.username = name;
        },
        check(state, index) {
            state.cart_list[index].isChecked =!state.cart_list[index].isChecked;
        },
        addToCart2(state, num) {
            
            state.cartInfos.total_nums += num ;
            state.cartInfos.total_price += num * state.goodList[state.which].price;
            state.cart_list[state.which].num += num;
        },
        chooseAll(state) {
            for(let item of cart_list) item.isChecked = true;
        }
    }

})
