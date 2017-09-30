<template>
    <div class="dialog-wrapper" >
      <div class="dialog-cover" @click="closeClick" v-if="isShow"></div>
      <transition name="slide-trans">
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeClick">x</p>
          <div class="dialog-html">
            <slot>empty</slot>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
  export default {
    props: {
      isShow:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeClick () {
        this.$emit('on-close')
      }
    }
  }
</script>

<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateY(-500px);
  }
  .slide-trans-leave-active {
    transition: all .3s;
    transform: translateY(-500px);
  }
  .dialog-cover{position: fixed;top:0;left:0;width: 100%;height: 100%;background: #000;opacity: 0.3}
  .dialog-content{position: fixed;top:30%;left: 25%;width: 50%;
    min-height:20%;background: #fff;border:2px solid #464068}
  .dialog-content .dialog-close{position: absolute;right:0;top:5px;width: 20px;height: 20px;color: #000;cursor: pointer}
  .dialog-html{padding: 25px}
</style>
