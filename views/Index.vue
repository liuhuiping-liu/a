<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header :title="title" fixed>
      <span slot="left">
        <router-link to="/">
          <mt-button icon="back"></mt-button>
        </router-link>
      </span>
    </mt-header>
    <!-- 推荐内容 -->
    <div class="hot">
      <router-link to="/detail">
        <div class="hot_item" v-for="(value, key) of dishes" :key="key">
          <img class="hot_img" :src="value.image" alt="" /><br />
          {{ value.subject }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.mint-header {
  background: url(../assets/bg1.jpg);
}
.hot_img {
  width: 158px;
  height: 110px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.hot {
  width: 90%;
  margin-left: 5%;
  margin-top: 40px;
}
.hot_item {
  margin-top: 20px;
  display: inline-block;
}
.hot > div:nth-child(2n-1) {
  margin-right: 14.79px;
}
</style>
<script>
export default {
  data() {
    return {
      dishes: [],
      category: [],
      title: "",
    };
  },
  mounted() {
    // 发送http请求以获取期望的菜谱分类数据
    this.axios.get("/category_home").then((res) => {
      this.category = res.data.results;
      this.title = this.category[this.$route.params.id - 1].category_name;
    });

    // 获取URL中的动态参数
    let id = this.$route.params.id;
    // 将此id发送到web服务器以获取当前分类的缩略图
    this.axios
      .get("/index_home", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        // this.dishes=res.data.result;
        this.dishes = [];
        let results = res.data.result;
        results.forEach((item) => {
          if (item.image != null) {
            item.image = require("../assets/articleimages/" + item.image);
          }
          this.dishes.push(item);
        });
      });
  },
};
</script>