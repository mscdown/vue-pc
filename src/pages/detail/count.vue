<template>
  <div class="count">
    <div class="content">
      <div class="count-title">
        <h2>数据统计</h2>
      </div>
      <div class="count-detail">
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <div class="buy-detail">
        <div class="type">
          <span class="product-type">产品类型：</span>
          <span class="color-type" :class="{'active':index===activeIndex}" v-for="(buytype, index) in buyTypes" @click="seachType(index)">
            {{buytype.label}}
          </span>
          <!--<span class="color-type">绿色版</span>-->
          <!--<span class="color-type">紫色版</span>-->
        </div>
        <div class="type">
          <span class="product-type">适用地区：</span>
          <div class="adress-type" @click="show">
            <span class="adress-title" >{{city}}</span>
            <div v-if="cityShow" class="city-list">
              <span  v-for="(item,index) in cityData" @click="seachCity(index)">{{item.label}}</span>
            </div>
          </div>
        </div>
        <div class="type">
          <span class="product-type">有效时间：</span>
          <span class="time-type">半年</span>
        </div>
        <div class="type">
          <span class="product-type">总价：</span>
          <span>500元</span>
        </div>
        <div class="type">
          <span class="button">立即购买</span>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="table-title">
        <h2>产品说明</h2>
      </div>
      <div class="table-detail">
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityShow: false,
      activeIndex: 0,
      city: '上海',
      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      cityData: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        },
      ]
    }
  },
  methods: {
    show () {
      this.cityShow = !this.cityShow;
    },
    seachCity (index) {
      this.city = this.cityData[index].label
    },
    seachType (index) {
      this.activeIndex= index
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{padding: 0 0 40px 0;background: #fff}
  .count-title{padding: 20px 0 20px 20px}
  .count-title h2{font-size: 19px}
  .count-detail{padding: 15px 0 15px 20px;background: #f7fcff;color: #999;}
  .buy-detail{padding: 20px 0 20px 20px}
  .buy-detail .type{margin-bottom: 20px}
  .buy-detail .product-type{display:inline-block;width: 100px}
  .buy-detail .color-type{display: inline-block;padding:5px;margin-right:5px;width: 60px;border: 1px solid #ccc;border-radius:3px;cursor:pointer;text-align: center}
  .buy-detail .adress-type{position:relative;display: inline-block;padding:5px;width: 60px;border: 1px solid #ccc;border-radius:3px;cursor:pointer;}
  .buy-detail .adress-type .adress-title{padding-left: 8px}
  .buy-detail .city-list{position: absolute;z-index:99;left:-1px;top:26px;width: 70px;border: 1px solid #ccc}
  .buy-detail .city-list span{display: inline-block;width: 100%;background:#fff;padding-bottom: 10px;}
  .buy-detail .city-list span:last-child{padding-bottom: 5px;}
  .buy-detail .city-list span:hover{background: #ccc}
  .buy-detail .color-type.active{background: #4fc08d;border-color: #4fc08d;color: #fff}
  .buy-detail .type .button{font-size: 14px;color: #fff;background: #4fc08d;padding: 10px 15px;margin-left:100px;cursor: pointer}

  .table{background: #fff;margin-top: 20px;padding-left: 20px}
  .table .table-title{padding: 20px 0 20px 0}
  .table .table-title h2{font-size: 19px}
  .table-detail{padding: 0 0 20px 0;color: #999;}
  .table .sales-board-table{width: 90%;}
  .table .sales-board-table td{border: 1px solid #f0f2f5;padding: 15px}
</style>
