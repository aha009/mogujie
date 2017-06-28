     <template>
      <div class="mod_row">
        <h2 class="header">超实惠-促销直达</h2>
        <div class="lazyData">
            <div class="shihui_wrapper row-1">
               <div class="flex">
                <a href="#" class="col-1">
                    <div class="col-1-box">
                        <span class="title">女神焕新季</span>
                        <p class="viceTitle">限时5折热抢</p>
                    </div>
                    <div class="imgBox">
                       <img src="http://s11.mogucdn.com/mlcdn/c45406/170605_71dg86de6d9l71jglh0becbbg8ld5_204x200.jpg_200x200.v1cAC.70.webp" alt="">
                    </div>   
                </a>
                <div class="col-2">
                    <a href="#" class="col-2-row-1">
                        <div class="row-1-box">
                            <span class="title">完美新裙</span>  
                            <p class="viceTitle">3折限量秒</p>
                        </div>
                        <div class="imgBox">
                          <img src="http://s11.mogucdn.com/mlcdn/c45406/170605_4j82addihleiha9lkch899f2ihc1e_180x180.jpg_160x160.v1cAC.70.webp" alt="">
                        </div>
                    </a>
                    <a href="#" class="col-2-row-2">
                        <div class="row-2-box">
                            <span class="title">"裤"爽一夏</span>
                            <p class="viceTitle">最新潮裤7折秒</p>
                        </div>
                        <div class="imgBox">
                          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_83jj8d16003529fckia37e759cafl_180x180.jpg_160x160.v1cAC.70.webp" alt="">
                        </div>
                    </a>
                </div>
                </div>
                <div class="shihui_wrapper row-2">
                    <a href="#">
                        <div>
                            <span class="title">夏季美鞋</span>
                            <p class="viceTitle">低至49元限时购</p>
                        </div>
                        <div class="imgBox">
                          <img src="http://s11.mogucdn.com/mlcdn/c45406/170605_2g17d664ja4kf19246h9elff8g7fd_180x180.jpg_160x160.v1cAC.70.webp" alt="">
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <span class="title">人气美妆</span>
                            <p class="viceTitle">热销单品2折起</p>
                        </div>
                        <div class="imgBox">
                          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_1f516kkj9ca7dac94d43hchkl325f_180x180.jpg_160x160.v1cAC.70.webp" alt="">
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <span class="title">热销上装</span>
                            <p class="viceTitle">9.9元疯狂大促</p>
                        </div>
                        <div class="imgBox">
                          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_562b43j1b5kk0dkg56a2ajkgkfhlj_180x180.jpg_160x160.v1cAC.70.webp" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </div>
      
</template>


<script>
export default {
  data() {
    return {
        
    }
  }
  
}
</script>

<style scoped>
    .mod_row {
        background: #fff;
    }
    h2 {
        font-size: .8rem;
        font-weight: normal;
        margin-top: .6rem;
        height: 2rem;
        line-height: 1.9rem;
        border-bottom: .05rem solid rgb(246,246,246);
        padding-left: .6rem;
    }
    .title {
        font-size: .7rem;
        font-weight: bold;
    }
    .viceTitle {
        font-size: .6rem;
        color: rgb(255,34,85);
    }
    .row-1 .col-1 {
        border-right: .05rem solid rgb(246,246,246); 
        border-bottom: .05rem solid rgb(246,246,246); 
        width: 50%;
        text-align: center;
        padding-top: .8rem;
    }
    .row-1 .col-1 img{
        width: 9rem;
    }
    .row-2 {
        display: flex;
    }
    .flex{
        display:flex;
    }
    .col-2 {
        display:flex;
        flex-direction: column;
        width: 50%;
    }
    .col-2 .imgBox{
        display: inline-block;
        position: relative;
        top: -2rem;
    }
    .row-1-box ,.row-2-box {
        display: inline-block;
    }
    .col-2-row-1 ,.col-2-row-2 {
        height: 4rem;
        text-align: center;
        justify-content: space-between;
    }
    .row-1-box {
        padding-top: .8rem;
    }
    .col-2 a {
        border-bottom: .05rem solid rgb(246,246,246); 
    }
    .row-2 a {
        width: 33.3%;
        text-align: center;
        border-right: .05rem solid rgb(246,246,246); 
    }
    .col-2-row-1 .imgBox{
        position: relative;
        left: 2.5rem;
        margin-top: -.2rem;
    }
    .col-2-row-2 .imgBox {
        position: relative;
        top: .8rem;
        
    }
    .row-2-box {
        position: relative;
        left: -2.5rem;
        top: 1rem;
    }
    .col-2-row-2 .imgBox img {
        width: 50%;
        position: relative;
        top: -3.5rem;
        right: -2.5rem;
    }
    .row-2 img{
        width: 4rem;
    }
</style>
