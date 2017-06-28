<template>
  <div class="wrapper">
      <SearchBar></SearchBar>
      <mt-swipe class="topSwipe" :auto="2000">
          <mt-swipe-item v-for="data in topSwipe" key="data.id">
            <img :src="data.src" alt="" style="width: 100%; margin-top: -2.5rem;">
          </mt-swipe-item>
      </mt-swipe>

      <div class="keys-list">
          <div class="keys-item">
            <a href="#">
              <div class="text_box title">大牌满减</div>
              <div class="text_box sub_title">美邦19元秒杀</div>
              <div class="img-box">
                  <div class="img-wrap" img-src="">
                      <img src="http://s2.mogucdn.com/mlcdn/c45406/170601_52a0649cbj4b1ik53e119cdbj3ba4_180x180.jpg_200x9999.v1c7E.70.webp" alt="">
                  </div>
              </div>
            </a>
          </div>
          <div class="keys-item">
            <a href="#">
              <div class="text_box title">每日上新</div>
              <div class="text_box sub_title">新品5折疯抢</div>
              <div class="img-box">
                  <div class="img-wrap" img-src="">
                      <img src="http://s11.mogucdn.com/mlcdn/c45406/170605_6kgib647l6aj5dk67a9bjlhg3aa9b_180x180.jpg_200x9999.v1c7E.70.webp" alt="">
                  </div>
              </div>
            </a>
          </div>
          <div class="keys-item last">
            <a href="#">
              <div class="text_box title">天天拼团</div>
              <div class="text_box sub_title">每天1元好货</div>
              <div class="img-box">
                  <div class="img-wrap" img-src="">
                      <img src="http://s3.mogucdn.com/mlcdn/c45406/170606_1a603b40la93k1j4kld6ck6k3h6ld_1000x1000.jpg_200x9999.v1c7E.70.webp" alt="">
                  </div>
              </div>
            </a>
          </div>
      </div>


      <div class="count_down">
          <div class="left_part">
              <p class="title">21点快抢<span></span>距开始</p>
              <div class="counting" data-remain="129">
                  <span class="ct_num hh">00</span>:
                  <span class="ct_num mm">00</span>:
                  <span class="ct_num ss">00</span>
              </div>
          </div>
          <a class="more" href="#">
            <img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png" alt="">
          </a>
      </div>

      <swiper :options="swiperOption" class="midSwipe">
        <swiper-slide v-for="slide in swiperSlides">
            <img :src="slide.src" alt="">
            <p class="desc">{{slide.desc}}</p>
            <p class="item_price">
                {{slide.price}}
                <span class="origin"><del>{{slide.origin}}</del></span>
            </p>
        </swiper-slide>
      </swiper>

      <chaoshihui></chaoshihui>
      <hotmarket></hotmarket>
      <doulike></doulike>
      <bottom-nav></bottom-nav>

  </div>
</template>

<script>
import BottomNav from '@/public/BottomNav'
import SearchBar from '@/public/SearchBar'
import chaoshihui from './chaoshihui'
import hotmarket from './hotmarket'
import doulike from './doulike'
 
export default {
  data() {
    return {
       topSwipe: [
        {
          'id': '1',
          'title': '女鞋研究所',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
        },
        {
          'id': '2',
          'title':'盛夏新品抢先购',
          'src': 'http://s11.mogucdn.com/mlcdn/c45406/170603_29hcl9k2bgfa7f1c6c5h2gla37bee_750x390.jpg_800x9999.v1c7E.70.webp',
        },
        {
          'id': '3',
          'title':'套装小心机',
          'src': 'http://s2.mogucdn.com/mlcdn/c45406/170603_14bkgedjabda98ded5a3958l2h8j3_750x390.jpg_800x9999.v1c7E.70.webp',
        },
        {
          'id': '4',
          'title':'母婴团购',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
        }
       ],
       midSwipe: [
         {
          'id': '1',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        {
          'id': '2',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        {
          'id': '3',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        {
          'id': '4',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        {
          'id': '5',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        {
          'id': '6',
          'title': '刺绣一字领露肩衬衣',
          'src': 'http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_800x9999.v1c7E.70.webp',
          'price': '¥34.00',
          'origin': '¥70.00'
        },
        
       ],
       swiperOption: {
          setWrapperSize :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          },
          {
            desc: '烫染修复滋养免洗护发精油',
            price: '￥29.90',
            origin: '￥100',
            src: 'http://s2.mogucdn.com/mlcdn/1689c6/170606_09a566h091kafjlcd12i71j941if6_640x640.jpg_320x999.webp'
          }

          ]
       }
  },
  components: {
    SearchBar,
    chaoshihui,
    hotmarket,
    doulike,
    BottomNav
  }
  
}
</script>

<style scoped>
.mint-swipe-indicators {
  position:absolute;
  left: 1rem !important;
  bottom: 0rem;
}
a {
  display: inline-block;
}
.topSwipe{
    height: 8.5rem;
}
  .keys-list{
    width: 100%;
    height: 5.35rem;
    display: flex;
    background-color: #fff;
    padding-top: .5rem;
  }
  .keys-item {
    display: flex;
    width: 33.3333333333%;
    justify-content: center;
    text-align: center;
  }
  .keys-item a {
    display: inline-block;
    margin: 0 auto;
  } 
  .keys-item .title{
    height: 0.1rem;
    line-height: 0.1rem;
    font-size: 0.72rem;
    color: #ff6801;
    margin: .5rem 0;
    font-weight: normal;
  }
  .keys-item img {
    width: 2.5rem;
    margin: 0 auto;
  }
  .keys-item .sub_title{
    font-size: 0.68rem;
    color: #666;
  }
  .keys-list .keys-item:after {
    content: '';
    width: .1rem;
    height: 81.2%;
    border-right: 1px solid #eee;
    position: relative;
    top: .5rem;
}
.keys-list .last:after {
    content: '';
    border: none;
}
  .count_down{
    font-weight: 500;
    margin-top: .6rem;
    padding: .7rem;
    padding-bottom: .2rem;
    background-color: #fff;
    font-size: .75rem;
    display: flex;
  } 
  .count_down .left_part {
    display: flex;
    align-items: center;
  }
  .count_down .more{
    position: absolute;
    right: 1rem;
  }
  .count_down .more img{
    width: 2.6rem;
    height: .6rem;
  }
  .count_down .left_part .title {
    padding-right: 22px;
  }
  .count_down .left_part .title span {
    width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    background-color: black;
    border-radius: 0.3rem;
    margin: 0 0.3rem 0.12rem 0.3rem;
}
.count_down .left_part .counting .ct_num {
    color: white;
    padding: 0.05rem 0.13rem;
    border-radius: 0.17rem;
    background-color: black;
    margin: auto 0.05rem;
}
  .midSwipe  {
     background: #fff;
  }
  .swiper-slide {
     width: 4.7rem !important;
     overflow: hidden;
     align-items: center;
     margin: 20px;

  }
 .swiper-slide p {
   font-size: .5rem;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
 .swiper-slide img{
    width: 4rem;
}
  .swiper-slide .item_price {
    font-size: .64rem;
    color: rgb(255,39,89);
  }
  .swiper-slide .item_price .origin{
    color: #000;
    font-size: .5rem;
  }



</style>
