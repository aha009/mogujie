<template>
  <div class="ctgy_index">
    <div class="type">
      <ul class="type_items">
        <li v-for="data in type" key="data.id">
          <div class="type_items content">
           <a href="#" class="innerContent">
              <img :src="data.src" alt="">
              <div class="type_title">
                {{data.title}}
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
    <ctgy-goods></ctgy-goods>
  </div>
  
</template>
<script>
import TabBar from '@/public/TabBar'

export default {
  data() {
    return {
      type: [
        {
          id: '1',
          src: 'http://s16.mogucdn.com/p1/160316/upload_ifrdmndghe4tmnrvg4zdambqmeyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '四件套'
        },
        {
          id: '2',
          src: 'http://s17.mogucdn.com/p1/160316/upload_ifrtiojvha4tmnrvg4zdambqhayde_120x120.png_200x9999.v1c7E.70.webp',
          title: '衣柜'
        },
        {
          id: '3',
          src: 'http://s16.mogucdn.com/p1/160316/upload_ie4ggzteha4tmnrvg4zdambqgiyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '被子'
        },
        {
          id: '4',
          src: 'http://s16.mogucdn.com/p1/160316/upload_ifrtgmzwhe4tmnrvg4zdambqhayde_120x120.png_200x9999.v1c7E.70.webp',
          title: '墙贴'
        },
        {
          id: '5',
          src: 'http://s18.mogucdn.com/p2/160828/upload_8h7ck5bjaf2g865g034i5jeh3cf18_120x120.jpg_200x9999.v1c7E.70.webp',
          title: '花束'
        },
        {
          id: '6',
          src: 'http://s17.mogucdn.com/p1/160316/upload_ifrgmmrqgmzdonrvg4zdambqmeyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '枕头'
        },
        {
          id: '7',
          src: 'http://s16.mogucdn.com/p1/160316/upload_ie3tiojzgmzdonrvg4zdambqgayde_120x120.png_200x9999.v1c7E.70.webp',
          title: '绿植'
        },
        {
          id: '8',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ifqwgzrvgqzdonrvg4zdambqgyyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '家居鞋'
        },
        {
          id: '9',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ifqwgzrvgqzdonrvg4zdambqgyyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '装饰小物'
        },
        {
          id: '10',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ifrdcyrwmuzdonrvg4zdambqmeyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '抱枕'
        },
        {
          id: '11',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ie4tqzteheztonrvg4zdambqgqyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '厨房电器'
        },
        {
          id: '12',
          src: 'http://s16.mogucdn.com/p1/160316/upload_ifrgczjymyzdonrvg4zdambqmeyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '蚊帐'
        },
        {
          id: '13',
          src: 'http://s17.mogucdn.com/p1/160316/upload_ifqtkn3ehaztonrvg4zdambqgyyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '鞋架'
        },
        {
          id: '14',
          src: 'http://s17.mogucdn.com/p1/160316/upload_ifrwmyrvheztonrvg4zdambqhayde_120x120.png_200x9999.v1c7E.70.webp',
          title: '灯の集合'
        },
        {
          id: '15',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ifrwmztfmuzdonrvg4zdambqhayde_120x120.png_200x9999.v1c7E.70.webp',
          title: '地毯地垫'
        },
        {
          id: '16',
          src: 'http://s17.mogucdn.com/p1/160316/upload_ifqwimjzmeztonrvg4zdambqgyyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '窗帘'
        },
        {
          id: '17',
          src: 'http://s18.mogucdn.com/p1/160316/upload_ie4dqyjvgm2donrvg4zdambqgiyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '小家具'
        },
        {
          id: '18',
          src: 'http://s16.mogucdn.com/p1/160320/upload_ifrdgmzzme3weyjwg4zdambqmeyde_120x120.png_200x9999.v1c7E.70.webp',
          title: '床垫床席'
        }
      ]
    }
  },
  components: {
    TabBar
  }
}
</script>
<style scoped>
.ctgy_index {
  background: #fff;

}
.ctgy_index .type_items {
  display: flex;
  flex-wrap: wrap;
}
.ctgy_index .type_items li {
  display: flex;
  margin: 0 auto;
  font-size: .72rem;
  width: 25.1%;
  text-align: center;
  margin-bottom: 1rem;
}
.type_items .content img {
  width: 90%;
  margin: 0 auto;
}
.innerContent {
  display: flex;
  vertical-align: center;
  flex-direction: column;
}
.type_title {
  margin: .5rem 0;
}
</style>
