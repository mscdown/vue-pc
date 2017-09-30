<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2 class="img-title">{{slides[nowIndex].title}}</h2>
    <ul class="nav">
      <li @click="goto(prevIndex)"><a >&lt;</a></li>
      <li @click.stop="goto(index)" v-for="(item, index) in slides"><a :class="{on: index === nowIndex}">{{index + 1}}</a></li>
      <li @click="goto(nextIndex)"><a>&gt;</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    created() {
      this.runInv();
    },
    data() {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    methods: {
      goto: function(index){
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        })
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    }
  }
</script>

<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show{ width: 900px;height: 500px;padding: 10px 0 0 20px;position: relative;overflow: hidden}
  .slide-show .img-title{position: absolute;width:900px;height:30px;line-height:30px;bottom:0;color:#fff;background: #000;opacity: 0.5}
  .slide-show .nav{position: absolute;height:30px;right: 18px;bottom: 0; color: #fff;line-height: 30px}
  .slide-show .nav li{display: inline-block; cursor: pointer}
  .slide-show .nav li a{padding:0 10px 0 10px}
  .slide-show .nav li a.on{text-decoration: underline}
</style>
