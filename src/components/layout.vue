<template>
  <div>
    <div class="app-header">
      <div class="header-content">
        <div class="header-logo">
          <a href="localhost:8080">
            <img src="../assets/logo.png" width="50" height="50" alt="">
          </a>
        </div>
        <div class="header-nav">
          <ul class="nav">
            <li v-if="username !== ''">{{username}}</li>
            <li v-if="username !== ''" class="line"> | </li>
            <li v-if="username !== ''" @click="goOut">退出</li>
            <li v-if="username === ''" class="login" @click="logClick"><a>登陆</a></li>
            <li class="line"> | </li>
            <li v-if="username === ''" class="register" @click="regClick"><a>注册</a></li>
            <li v-if="username === ''" class="line"> | </li>
            <li class="about" @click.stop="aboutClick"><a>关于</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <div class="footer-text">
        <p>© 2016 fishenal MIT</p>
      </div>
    </div>
    <my-dialog :is-show="isShowDialog" @on-close="onClose" >
      <component :is="toShowComponent" @succ-log="successLog"></component>
    </my-dialog>
  </div>
</template>

<script>
  import dialog from './dialog'
  import about from './about'
  import login from './login'
  import register from './register'
  export default {
    components: {
      MyDialog: dialog,
      login,
      register,
      about
    },
    data() {
      return {
        isShowDialog: false,
        toShowComponent: '',
        username: ''
      }
    },
    methods: {
      aboutClick () {
        this.isShowDialog = true;
        this.toShowComponent = 'about'
      },
      logClick () {
        this.isShowDialog = true;
        this.toShowComponent = 'login'
      },
      regClick () {
        this.isShowDialog = true;
        this.toShowComponent = 'register'
      },
      onClose() {
        this.isShowDialog = false;
      },
      successLog(data) {
        this.username = data.username
        this.isShowDialog = false
      },
      goOut() {

      }
    }
  }
</script>

<style>
  /* header css*/
  .app-header{ width: 100%;height:90px; background: #363636;}
  .app-header .header-content{ width:90%; margin: auto;line-height:90px;}
  .header-logo img{margin-top:20px;}
  .header-logo, .header-nav{display: inline-block; }
  .header-nav{float: right;}
  .header-nav li{display: inline-block; padding: 0 4px 0 4px; color: #b2b2b2;font-size:13px;cursor: pointer}

  /* footer css*/
  .app-footer{width: 100%;height: 80px;line-height:80px;background: #e3e4e8;clear: both;text-align: center;}


  /* reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }
</style>
