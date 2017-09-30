<template>
  <div class="index-wrapper">
      <div class="left">
        <div class="box">
          <div class="title">
             <h2>全部产品</h2>
          </div>
          <h3 class="goods">PC产品</h3>
          <ul class="nav">
            <li v-for="(orderlist, index) in getOrderList"><a href="">{{ orderlist.product }}</a><span v-show="orderlist.buyNum>2" >HOT</span></li>
            <!--<li><a href="">数据预测</a></li>-->
            <!--<li><a href="">流量分析</a><span >HOT</span></li>-->
            <!--<li><a href="">广告发布</a></li>-->
          </ul>
          <h3 class="goods">手机应用类</h3>
          <ul class="nav">
            <li><a href="">91助手</a></li>
            <li><a href="">产品助手</a><span >HOT</span></li>
            <li><a href="">智能地图</a></li>
            <li><a href="">团队语音</a></li>
          </ul>
        </div>
        <div class="box minheight">
          <div class="title">
            <h2>最新消息</h2>
          </div>
          <ul class="nav">
            <li v-for="newlist in getNewsList"><a href="">{{ newlist.title }}</a></li>
            <!--<li><a href="">新闻条目1新闻条目1新闻条目1新闻条目2</a></li>-->
            <!--<li><a href="">新闻条目3</a></li>-->
            <!--<li><a href="">新闻条目4发布</a></li>-->
          </ul>
        </div>
      </div>
      <div class="right">
        <slide-show :slides="slides" :inv="3000"></slide-show>
        <div class="product-list">
          <div class="product" v-for="(item, index) in boardList">
            <img class="img"  src="../assets/images/1.png" alt="" >
            <div class="content">
              <h2>{{ item.title }}</h2>
              <div class="description">{{item.description}}</div>
              <div class="sell"><router-link :to="{path:'/detail/'+ item.toKey}">立即购买</router-link></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  const ERR_OK = 0;
  export default {
    data() {
      return {
        getOrderList: [],
        getNewsList: [],
        boardList: [],
        invTime: 2000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: '图片1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: '图片2',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: '图片3',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: '图片4',
            href: 'detail/analysis'
          }
        ]
      };
    },
    created() {
      this.$http.get('/api/db').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.$nextTick(() => {
            this.getOrderList = response.data.getOrderList.list;
            this.getNewsList = response.data.getNewsList;
            this.boardList = response.data.boardList;
          })
        }
      });
    },
    components: {
      "slide-show": slideShow
    }
  }
</script>

<style scoped>
  .index-wrapper{width: 90%;margin: 0 auto;padding: 0 0 20px 0;display: flex;min-width: 840px}
  .index-wrapper .left{width: 300px;}
  .index-wrapper .left .box{background: #fff;margin: 10px 0 0 0}
  .index-wrapper .left .box .title {background: #4fc08d;color:#fff;margin-bottom: 10px}
  .index-wrapper .left .box .title h2{padding: 10px 20px}
  .index-wrapper .right{flex: 1;}
  .left .goods{padding: 10px 15px 5px 15px;font-weight: bold;color: #222;}
  .left .nav{padding: 10px 15px;border-bottom: 1px solid #ddd;}
  .left .minheight .nav{border-bottom: none}
  .left .nav li{padding: 5px}
  .left .minheight .nav li a {display: inline-block;width: 230px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
  .left .nav li span{background: red;color:#fff}
  .minheight{min-height: 512px}
  .right{min-width: 840px}
  .right .product{width: 42%;display: inline-block;padding: 20px;margin: 20px 0 0 20px;background: #fff;min-height: 125px;font-size: 0}
  .right .img{vertical-align: top}
  .right .content{display:inline-block;width:180px;vertical-align: top;font-size: 12px;margin-left: 20px}
  .right .sell{width: 280px;height: 34px;margin-top: 15px}
  .right .sell a{background: #4fc08d;padding: 10px 20px;display: inline-block;color:#fff}
  .right h2{display: inline-block;font-size: 18px;font-weight: bold;color:#000;margin-bottom: 15px}
</style>
