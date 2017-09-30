<template>
  <div class="detail">
    <div class="content-left">
      <div class="logo-img">
        <img :src="getImg" alt="">
      </div>
      <ul>
        <router-link v-for="(item, index) in products" tag="li" :to="{path: item.path}" class="router-nav">
          {{item.name}}
        </router-link>
      </ul>
    </div>
    <div class="content-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    computed: {
      getImg () {
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style scoped>
  .detail{width: 85%;margin: 0 auto;padding: 20px 0 30px 0;display: flex}
  .content-left{width: 200px;height:337px;background: #fff;display: inline-block;vertical-align: top}
  .content-right{display: inline-block;flex:1;vertical-align: top;margin-left: 15px;}
  .logo-img{text-align: center;margin-bottom: 20px}
  .router-nav{padding: 10px 15px;cursor: pointer;width: }
  .router-nav:hover{background: #4fc08d;color:#fff}
  .router-link-active{background: #4fc08d;color:#fff}
</style>
