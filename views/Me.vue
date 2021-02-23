<template>
  <div>
    <!-- 顶部背景 -->
    <div class="top_bg"></div>
    <!-- 头像和用户名 -->
    <div class="me_container">
      <div class="user_container">
        <img class="avatar" src="../assets/avatar.png" alt="" />
        <router-link to="/login" class="h1">请登录</router-link>
      </div>
      <!-- 目录 -->
      <ul class="ul">
        <router-link to="/collection">
          <li class="item">
            <!-- <img src="../assets/fxhy.png" alt=""> -->
            我的收藏
          </li>
        </router-link>
        <li>
          <!-- <img src="../assets/fxhy.png" alt=""> -->
          分享好友
        </li>
        <li>
          <!-- <img src="../assets/gywm.png" alt=""> -->
          关于我们
        </li>
        <li>
          <!-- <img src="../assets/yjfk.png" alt=""> -->
          意见反馈
        </li>
      </ul>
    </div>

    <!-- 底部导航栏 -->
    <mt-tabbar v-model="current" fixed>
      <mt-tab-item id="home">
        <img
          src="../assets/home_enable.png"
          slot="icon"
          v-if="current == 'home'"
        />
        <img src="../assets/home_disable.png" slot="icon" v-else />
        首页
      </mt-tab-item>
      <mt-tab-item id="classify">
        <img
          src="../assets/classify_enable.png"
          slot="icon"
          v-if="current == 'classify'"
        />
        <img src="../assets/classify_disable.png" slot="icon" v-else />
        分类
      </mt-tab-item>
      <mt-tab-item id="me">
        <img src="../assets/me_enable.png" slot="icon" v-if="current == 'me'" />
        <img src="../assets/me_disable.png" slot="icon" v-else />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #f7c3c3;
  color: #d81e06;
}
.top_bg {
  width: 100%;
  height: 150px;
  background: url(../assets/bg.jpg);
}
.me_container {
  width: 90%;
  margin-left: 5%;
}
.user_container {
  margin-top: -30px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 20px;
}
.h1 {
  font-size: 25px;
  font-weight: 700;
  color: #000;
}
.ul {
  margin-top: 20px;
  font: 20px;
  line-height: 30px;
  list-style: none;
}
.ul li{
  color: #000;
}
</style>
<script>
export default {
  data() {
    return {
      current: "me",
    };
  },
  mounted() {},

  watch: {
    current(value) {
      if (value == "home") {
        this.$router.push("/");
      } else if (value == "classify") {
        this.$router.push("/classify");
      } else if (value == "me") {
        this.$router.push("/me");
      }
    },
  },
  methods: {},
};
</script>