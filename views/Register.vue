<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right"> 登录 </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单编辑区域开始 -->
    <mt-field
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      :attr="{ maxlength: 20 }"
      v-model="username"
      :state="usernameState"
      @blur.native.capture="checkUsername"
    >
    </mt-field>
    <mt-field
      type="password"
      label="密码"
      placeholder="请输入密码"
      :attr="{ maxlength: 20, autocomplete: 'off' }"
      v-model="password"
      :state="passwordState"
      @blur.native.capture="checkPassword"
    >
    </mt-field>
    <mt-field
      type="password"
      label="确认密码"
      placeholder="请再次输入密码"
      :attr="{ maxlength: 20, autocomplete: 'off' }"
      v-model="conpassword"
      :state="conpasswordState"
      @blur.native.capture="checkConpassword"
    >
    </mt-field>
    <!-- 表单编辑区域结束 -->
    <!-- 提交按钮开始 -->
    <mt-button type="primary" size="large" @click="handle">
      免费注册
    </mt-button>
    <!-- 提交按钮结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      // 用户名初始值
      username:'',
      // 密码初始值
      password:'',
      // 确认密码初始值
      conpassword:'',
      usernameState:'',
      passwordState:'',
      conpasswordState:''
    }
  },
  methods:{
    checkUsername(){
      // 判断用户名是否合法
      let usernameRegExp=/^[0-9a-zA-Z]{6,20}$/;
      if(usernameRegExp.test(this.username)){
      this.usernameState="success"
      return true;
      }else{
        this.usernameState="error"
        this.$toast({
          message:"用户名格式错误",
          position:"middle",
          duration:"5000"
        });
        return false;
      }
    },
    checkPassword(){
       // 判断密码是否合法
      let passwordRegExp=/^\w{8,20}$/;
      if(passwordRegExp.test(this.password)){
        this.passwordState="success"
        return true;
      }else{
        this.passwordState="error"
        this.$toast({
          message:"密码格式错误",
          position:"middle",
          duration:"5000"
        })
        return false;
      }
    },
    checkConpassword(){
      // 判断两次密码是否一致
      if(this.password==this.conpassword){
        this.conpasswordState="success"
        return true;
      }else{
        this.conpasswordState="error"
        this.$toast({
          message:"两次密码不一致",
          position:"middle",
          duration:"5000"
        })
        return false;
      }
    },
    // 用户注册处理函数
    handle(){
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        // 将用户名和密码发送到web服务器
        let object={
          username:this.username,
          password:this.password
        }
        this.axios.post(
          "/register",
          this.qs.stringify(object)
        ).then(res=>{
          if(res.data.code==201){//用户名已存在
            this.$messagebox("提示信息","对不起，用户名已存在");
          }else{//注册成功
            this.$messagebox.confirm("是否登录？","提示信息").then(
              (value)=>{
                this.$router.push('/login')
              }).catch(e=>{
                this.$router.push('/')
              })
           
          }
        })
      }
    }
  }
}
</script>