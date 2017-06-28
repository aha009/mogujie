import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/mainframe/index'
import category from '@/page/category/category'
import cart from '@/page/cart/cart'
import cartInfo from '@/page/cart/cart-info'
import mine from '@/page/mine/mine'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/category',
      name: 'category',
      component: category,
      children: [
        {
          path: '',
          name: '正在流行',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'top',
          name: '上衣',
          component: require('@/page/category/ctgy_top')
        },
        {
          path: 'pants',
          name: '裤子',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'skirt',
          name: '裙子',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'underwear',
          name: '内衣',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'shoes',
          name: '女鞋',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'bf',
          name: '男友',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'bag',
          name: '包包',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'sports',
          name: '运动',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'acc',
          name: '配饰',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'beauty',
          name: '美妆',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'personal',
          name: '个护',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'household',
          name: '家居',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'general',
          name: '百货',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'maternal',
          name: '母婴',
          component: require('@/page/category/ctgy_index')
        },
        {
          path: 'food',
          name: '食品',
          component: require('@/page/category/ctgy_index')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/cartInfo',
      name: 'cartInfo',
      component: cartInfo
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/mine-info',
      name: 'mine-info',
      component: require('@/page/mine/mine-info')
    },
    {
      path: '/good',
      name: 'good',
      component: require('@/page/good/good')
    }
  ]
})
