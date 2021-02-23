<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header title="菜品分类" fixed> </mt-header>
    <!-- 侧边导航栏 -->
    <div class="box">
      <!-- 导航栏 -->
      <div class="navBox">
        <ul class="nav" v-for="(item, i) in category" :key="i"  @click="click">
          <li>{{ item.category_name }}</li>
        </ul>
      </div>
      <!-- 实现面板 -->
      <div class="container">
        <router-link to="/detail">
          <div class="item_container" v-for="(v, k) in dishes" :key="k">
            <img
              class="item_img"
              :src="v.image"
              alt=""
            />
            <span class="dishes">{{v.subject}}</span>
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

.mint-header {
  background-color: #a61212;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #f7c3c3;
  color: #d81e06;
}
.navBox {
  position: fixed;
}
.nav {
  line-height: 50px;
  text-align: center;
}
.nav > li {
  border: 1px solid #eee;
  width: 100px;
}
.item_img {
  width: 130px;
  height: 90px;
  border-radius: 5px;
  margin-right: 10px;
}
.container {
  position: absolute;
  top: 0;
  left: 105px;
}
.item_container {
  width: 269px;
  position: relative;
  margin-bottom: 10px;
  color: black;
}
.box {
  margin-top: 42px;
  position: relative;
}
.dishes {
  position: absolute;
  top: 5px;
  font-size: 20px;
  font-weight: 400;
}
</style>
<script>
export default {
  data() {
    return {
      current: "classify",
      category:[],
      dishes:[]
    };
  },
   methods:{
    click(i){  
      console.log(i)
    }
  },
  mounted() {
    // 发送http请求以获取期望的菜谱分类数据
    this.axios.get('/category_all').then((res)=>{
      this.category=res.data.results;
    })
    // 点击导航栏搜索先关分类数据
    
    this.axios.get('/index_all',{
      params:{
        id:6
      }
    }).then((res)=>{
      this.dishes = [];
        let results = res.data.results;
        results.forEach((item) => {
          if (item.image != null) {
            item.image = require("../assets/articleimages/" + item.image);
          }
          this.dishes.push(item);
        });
    })
  },

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
};
</script>