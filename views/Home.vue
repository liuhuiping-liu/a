<template>
  <div>
    <!-- 顶部搜搜索框 -->
    <div class="top">
      <router-link to="/search">
      <input id="search" type="text" placeholder="搜索美食" />
      </router-link>
    </div>
    <div class="w-90">
      <!-- 小图标 -->
      <div class="small_container">
        <router-link
          :to="`/index/${item.id}`"
          v-for="(item, index) of category"
          :key="index"
        >
          <div class="small_img">
            <img class="img-small" :src="item.image" alt="" /><br />
            {{ item.category_name }}
          </div>
        </router-link>
      </div>
      <!-- 轮播图 -->
      <mt-swipe class="swipe">
        <mt-swipe-item>
          <img class="swipe_img" src="../assets/xn.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swipe_img" src="../assets/xn.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swipe_img" src="../assets/xn.jpg" alt="" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swipe_img" src="../assets/xn.jpg" alt="" />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 热门推荐 -->
      <h1 class="red">热门推荐</h1>
      <div class="hot">
        <router-link to="/detail">
          <div class="hot_item" v-for="(v, k) of hotMenu" :key="k">
            <img
              class="hot_img"
              :src="v.image"
              alt=""
            /><br />
            {{v.subject}}
          </div>
        </router-link>
      </div>
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
.swipe {
  height: 170px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #f7c3c3;
  color: #d81e06;
}
</style>
<style>

.swipe_img {
  width: 100%;
}

.w-90 {
  width: 90%;
  margin-left: 5%;
}
.top {
  background: url(../assets/bg1.jpg);
  text-align: center;
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.small_container {
  margin-top: 80px;
}
#search {
  width: 90%;
  height: 30px;
  background-color: #e8e8e8;
  border: 0;
  border-radius: 15px;
  padding-left: 15px;
  margin-top: 20px;
}
.img-small {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.small_img {
  display: inline-block;
  width: 25%;
  text-align: center;
  font-size: 12px;
  color: rgb(107, 2, 2);
}
.hot_img {
  width: 158px;
  height: 110px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.hot {
  margin-bottom: 60px;
}
.hot_item {
  margin-top: 20px;
  display: inline-block;
  color: #000;
}
.red {
  color: rgb(209, 81, 81);
}
.hot div:nth-child(2n-1) {
  margin-right: 14.79px;
}
</style>

<script>
export default {
  data() {
    return {
      current: "home",
      category: [],
      hotMenu:[]
    };
  },
  mounted() {
    // 发送http请求以获取期望的菜谱分类数据
    this.axios.get("/category_home").then((res) => {
      this.category = [];
      let results = res.data.results;
      results.forEach((item) => {
        if (item.image != null) {
          item.image = require("../assets/home/" + item.image);
        }
        this.category.push(item);
      });
    });
    // 获取热门推荐的菜谱数据
    this.axios.get('/hot').then((res)=>{
      this.hotMenu=[];
      let results = res.data.result;
      results.forEach((item) => {
        if (item.image != null) {
          item.image = require("../assets/articleimages/" + item.image);
        }
        this.hotMenu.push(item);
      });
    })
  },

  watch: {
    // 为底部导航栏添加监听
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
  methods: {
   
  },
};
</script>