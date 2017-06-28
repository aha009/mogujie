<template>
  <div class="wrapper like">
    <div class="title">猜你喜欢</div>
        <ul infinite-scroll-distance="3">
            <li v-for="(data,index) in goodList" key="data.id">
              <div class="item"  @click.prevent="which(index)">
                <router-link  to="/good">
                  <img class="good" :src="data.src" alt="">
                    <div class="tags">
                      <span class="tag" v-for="tag in data.tags" key="tag.id">{{tag.name}}</span>
                    </div>
                 </router-link>
                    <div class="col-2">
                        <span class="price">￥{{data.price}}</span>
                        <div>
                            <span class="likes_num">{{data.likes_num}}</span>
                            <img class="star star1" src="../../assets/images/star.png" v-show="!data.isLike" @click.stop.prevent="toggle(index)">
                            <img class="star star0" src="../../assets/images/star_y.png" v-show="data.isLike" @click.stop.prevent="toggle(index)">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        
    }
  },
  created(){
    this.axios.get('api/index').then(data => {
        if(data.status){
            this.$store.commit('obtain', data.data.items)
        }
    })
  },
    computed: {
    goodList() {
        return this.$store.state.goodList;
    }
  },
  methods: {
    toggle(index) {
        this.$store.commit('toggle', index);
    },
    which(index) {
        this.$store.commit('which', index);
    }
  
}}
</script>
<style scoped>
    .title {
       font-size: .75rem;
       font-weight: normal;
       margin: 1.1rem 0;
       vertical-align: center;
       text-align: center;
       background: url(../../assets/images/hot_title.png) no-repeat center center;
       background-size: 40%;
    }
    .star {
        width: 1rem !important;
        position: relative;
    }
    .like ul {
        display: flex;
        flex-wrap: wrap;
    }
    .like li {
        width: 46%;
        background-color: #fff;
        margin-left: 2.6%;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: .4rem;
    }
    .tag {
        color: rgb(90,111,122);
        font-size: .5rem;
        margin: .1rem;
        padding: .1rem;
        background: rgb(239,243,246);   
    }
    .tags {
        margin: .2rem;
    }
    .col-2 {
        margin: 0 .3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .col-2 >div {
        display:flex;
        align-items: center;
    }
    .price {
        font-size: .8rem;
        font-weight: bold;
    }
    .likes_num {
        font-size: .65rem;
        padding: .4rem;
        color: #777;
    }
    .good {
        width: 10rem;
        height: 13rem;
    }
    .star {
        width: 1rem;
    }
</style>
