<template>
  <div>
    <!-- 顶部导航栏 -->
    <mt-header title="我的收藏" fixed>
      <span slot="left">
        <router-link to="/me">
          <mt-button icon="back"></mt-button>
        </router-link>
      </span>
    </mt-header>
    <!-- 收藏缩略图 -->
    <div class="container">
      <div class="collection_container" v-for="(v,k) of 20" :key="k">
        <img class="collection_img" src="../assets/articleimages/img1.png" />
        <span class="dishes">菜名</span>
        <button class="btn_del">删除</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mint-header {
  background-color: #a61212;
}
.collection_img {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
}
.collection_container {
  margin-top: 10px;
  position: relative;
}
.container{
  width: 90%;
  margin: 5%;
  margin-top: 50px;
}
.btn_del{
  width: 60px;
  height: 30px;
  background-color: #eee;
  color: #888;
  border: 0;
  border-radius: 5px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.dishes{
  position: absolute;
  top: 5px;
  font-size: 23px;
  font-weight: 600;
}
</style>