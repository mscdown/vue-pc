<template>
    <div class="login-wrapper">
      <form action="">
        <div class="detail">
          <span class="name">用户名：</span>
          <div class="name-input">
            <input type="text" v-model="username" placeholder="请输入用户名">
          </div>
          <span class="error">{{ nameErrors.textError }}</span>
        </div>
        <div class="detail">
          <span class="password">密码：</span>
          <div class="password-input">
            <input type="text" v-model="userpassword" placeholder="请输入密码">
          </div>
          <span class="error">{{ passwordErrors.textError }}</span>
        </div>
        <div class="error" style="margin: 0 20px 10px 0">{{errorText}}</div>
        <div class="login" @click="goto"><a>登录</a></div>
      </form>
    </div>
</template>

<script>
  const ERR_OK = 0
  export default {
    data() {
      return {
        username: '',
        userpassword: '',
        errorText:''
      }
    },
    computed: {
      nameErrors () {
        let status,textError;
        if( !/@/g.test(this.username) ) {
          status = false
          textError = '用户名必须包含@'
        }else{
          status = true
          textError = ''
        }
        if(!this.userFlag) {
          textError = ''
          this.userFlag = true
        }
        return {
          status,
          textError
        }
      },
      passwordErrors() {
        let status,textError;
        if(!/^\w{1,6}$/g.test(this.userpassword)){
          status = false
          textError = '密码长度1到6位！'
        }else{
          status = true
          textError = ''
        }
        if(!this.userFlagtwo) {
            textError = ''
            this.userFlagtwo = true
        }
        return {
          status,
          textError
        }
      }
    },
    methods: {
      goto () {
        if(!this.nameErrors.status || !this.passwordErrors.status) {
          this.errorText = '部分选项未通过！'
          return;
        }else{
          this.errorText = ''
          this.$http.get('/api/login').then( (response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
              this.$emit('succ-log',response.data)
            }
          }, error => {})
        }
      }
    }
  }
</script>

<style scoped>
  .login-wrapper{overflow: auto;}
  .detail{padding: 13px 0 13px 0}
  .error{padding-left: 10px;color: red;font-size: 12px}
  .login a{display: inline-block;padding: 10px 20px;background: #4fc08d;color:#fff;margin-left: 90px}
  .name-input,.password-input{display: inline-block}
  .name,.password{display:inline-block;width: 100px;height: 25px;font-size: 16px}
</style>
