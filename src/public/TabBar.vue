<template>
  <div class="tabBar wrapper"> 
    <a href="#">综合</a>
    <a href="#">销量</a>
    <a href="#">新品</a>
  </div>

</template>

<script>

export default {
  data() {
    
  },
  components: {
    
  }
  
}
</script>
<style scoped>
    a {
        display: inline-block;
        width: 31%;
        height: 2rem;
        text-align: center;
        font-size: .85rem;
        line-height: 2rem;
    }
    a:before {
      content: '';
      border-left: 1px solid #ccc;
      height: 70%; 
    }
    .wrapper {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
</style>
