<template>
  <div class="wrap">
        <div class="header">
            <img src="../../images/logo.jpg" alt=""/>
        </div>
        <div class="section">
        <div class="form">
            <div class="titles">
                <span class="area1" @click="isGet(1)" :class="this.keet == 1? 'bg':''"><i class="iconfont">&#xe7dd;</i>二维码登录</span>
                <span class="area1" @click="isGet(2)" :class="this.keet == 2? 'bg':''"><i class="iconfont">&#xe653;</i>账号登录</span>
            </div>
            <div v-show="1 == this.keet" class="qrcode" >
                <p>手机扫码 安全防盗</p>
                <img src="../../images/erweima.jpg"/>
                <p>使用APP扫描二维码登陆</p>
            </div>
            <div class="login" v-show="2 == this.keet" >
                <ul>
                    <li>
                        <h5>登录账号</h5>
                        <p>
                            <i class="iconfont">&#xe653;</i>
                            <input type="text" placeholder="请输入手机号或邮箱" v-model="msg1" ref="form1" value="">
                        </p>
                        <button class="btn1" @click="phone()">手机号获取动态密码</button>
                        <button class="btn1" @click="mail()">邮箱获取动态密码</button>
                    </li>
                    <li>
                        <h5>动态密码</h5>
                        <p>
                            <i class="iconfont">&#xe60a;</i>
                            <input type="text" placeholder="请输入密码" v-model="msg2" ref="form2" value="">
                        </p>
                        
                    </li>
                    <button class="loginBtn" @click="login()">登录</button>
                </ul>
            </div>
        </div>
        </div>
        <div class="footer">
            <div>
                <img src="../../images/erweima.jpg" alt=""/>
                <div class="system">
                    <span>集团邮件系统</span>
                    <span>集团OA系统</span>
                    <span>集团BSS系统</span>
                    <span>集团官网</span>
                    <span>北京电信通官网</span>
                </div>
            </div>
            <p>北京电信通电信工程有限公司 版权所有 2011-2111 技术支持:IT共享中心</p>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "",
  data() {
    return {
      keet: 1,
      msg1: "",
      msg2: ""
    };
  },
  mounted(){

  },
  methods: {
    isGet: function(val) {
      this.keet = val;
    },
    phone(){
        //console.log(1);
        const val1 = this.$refs.form1.value;
        //console.log(val1);
        const reg1 = /^1[3578]\d{9}$/;
        if(!reg1.test(val1)){
            alert('请输入正确的手机号');
        }else{
             axios.get("/api/phone").then(res => {
              console.log(res.data);
            });
        }
    },
    mail(){
        const val1 = this.$refs.form1.value;
        const reg2 = /^\w+@[a-z0-9]+(\.[a-z]+)$/;
        if(!reg2.test(val1) ){
            alert('请输入正确的邮箱');
        }else{
            axios.get("/api/mail").then(res => {
              console.log(res.data);
            });
        }
    },
    login() {
      //console.log(this.$refs)
        const phoneNum = this.$refs.form1;
        const pwdNum = this.$refs.form2;
        //console.log(phoneNum.value,pwdNum.value);
        const val1 = phoneNum.value,
                val2 = pwdNum.value;
        const reg1 = /^1[3578]\d{9}$/,
            reg2 = /^\w+@[a-z0-9]+(\.[a-z]+)$/;
        if (reg1.test(val1) || reg2.test(val1)) {//如果为手机号或者邮箱
            axios.post("/api/login", {}).then(res => {
               const userinfo = JSON.stringify(res.data.data);
               //console.log(userinfo);
                if (res.data.code !== 0) return;
                window.sessionStorage.setItem('user',userinfo);
                this.$router.push("/home");  
            });
            
        }else{
            alert('请输入正确的手机号或邮箱');
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./login.css"></style>
