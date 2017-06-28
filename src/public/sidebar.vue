<template>
  <div class="sidebar">

    <ul>
        <li v-for="data in sidebar" key="data.id">
           <router-link :to="data.path">
              {{data.tittle}}
           </router-link> 
        </li>
    </ul>
    </div>

</template>

<script>
export default {
  data() {
      return {
        sidebar: [
            {
                id: '1',
                tittle: '正在流行',
                path: '/category'
            },
            {
                id: '2',
                tittle: '上衣',
                path: '/category/top'

            },
            {
                id: '3',
                tittle: '裤子',
                path: '/category/index'
            },
            {
                id: '4',
                tittle: '裙子',
                path: '/category/index'
            },
            {
                id: '5',
                tittle: '内衣',
                path: '/category/index'
            },
            {
                id: '6',
                tittle: '女鞋',
                path: '/category/index'
            },
            {
                id: '7',
                tittle: '男友',
                path: '/category/index'
            },
            {
                id: '8',
                tittle: '包包',
                path: '/category/index'
            },
            {
                id: '9',
                tittle: '运动',
                path: '/category/index'
            },
            {
                id: '10',
                tittle: '配饰',
                path: '/category/index'
            },
            {
                id: '11',
                tittle: '美妆',
                path: '/category/index'
            },
            {
                id: '12',
                tittle: '个护',
                path: '/category/index'
            },
            {
                id: '13',
                tittle: '家居',
                path: '/category/index'
            },
            {
                id: '14',
                tittle: '百货',
                path: '/category/index'
            },
            {
                id: '15',
                tittle: '母婴',
                path: '/category/index'
            },
            {
                id: '16',
                tittle: '食品',
                path: '/category/index'
            },
        ]
    }
  }
  
}
</script>

<style>
    .sidebar {
        position: fixed;
        top: 2rem;
        width: 25%;
        overflow-y: scroll;
        background: rgb(246,246,246);
        height: 33rem;
        font-size: .75rem;
        color: #ccc;
        
    }
    .sidebar li {
        height: 2.3rem;
        text-align: center;
        line-height: 3.333rem;
        color: #333;
        font-size: .75rem;
        
    }
</style>
