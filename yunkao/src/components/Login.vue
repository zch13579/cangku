<template>
  <div class="container">
    <div class="photo">
      <img src="/images/one.png">
    </div>
    <div class="login">
        <h2>登录，即刻创造您的应用</h2>
        <div class="top">
          <button @click="toggleLoginType('phone')" class="button1">手机号登录</button>
          <button @click="toggleLoginType('account')">账号密码登录</button>
        </div>
        <div class="pa" v-if="loginType === 'phone'">
          <input v-model="phoneNumber" type="text" placeholder="手机号">
          <button class="button2">发送验证码</button>
        </div>
        <div class="pa" v-else>
          <input v-model="username" type="text" placeholder="账号">
          <input v-model="password" type="password" placeholder="密码">
        </div>
        <p>我已阅读并同意服务协议和隐私政策</p>
        <button class="mainbutton" @click="login">登录</button>
        <button @click="register">还未注册?立即注册</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginType: 'phone',
      username: '',
      password: '',
      phoneNumber: ''
    };
  },
  methods: {
    login() {
      if (this.loginType === 'phone') {
        console.log('手机号登录', this.phoneNumber);
      } else {
        console.log('账号密码登录', this.username, this.password);
      }
    },
    register() {
      console.log('注册');
    },
    toggleLoginType(type) {
      this.loginType = type;
    }
  }
}
</script>

<style scoped>
.photo{
  width: 40%;
}
.login{
  width: 60%;
  text-align: center;
}
h2{
  font-size: x-large;
  padding-top: 150px;
}
.top{
  padding-top: 50px;
  padding-bottom: 20px;
}
.button1{
  padding-right: 50px;
}
.button2{
  margin-bottom: 10px;
  padding: 10px;
}
.pa{
  padding-top: 20px;
}
p{
  font-size: small;
}
.mainbutton{
  background-color: #007BFF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:332px ;
  margin-top: 5px;
}
.container {
  font-family: Arial, sans-serif;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 100%;
  margin: auto;
  display: flex;
}
input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(350px - 20px);
}

</style>