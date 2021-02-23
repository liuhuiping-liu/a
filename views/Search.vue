<template>
  <div>
    <!-- 顶部搜搜索框 -->
    <div >
      <router-link to="/">
        <img class="back" src="../assets/back.png" alt="" />
      </router-link>
      <router-link to="/search">
        <input id="search" type="text" placeholder="搜索美食" />
      </router-link>
    </div>
    <div class="w-90">
      <div class="history">
        <!-- 历史搜索 -->
        <p>历史搜索</p>
        <img class="del" src="../assets/del.png" alt="">
        <span class="history_item">红烧肉</span>
      </div>
      <div class="want">
        <!-- 猜你想搜 -->
        <p>猜你想搜</p>
        <span class="history_item">面食</span>
        <span class="history_item">冬瓜</span>
        <span class="history_item">玉米</span>
        <span class="history_item">红烧肉</span>
      </div>
    </div>
  </div>
</template>
<style>
.mint-button::after {
  border: 0;
  background-color: #fff;
}
</style>
<style>
#search {
  width: 80%;
  height: 30px;
  background-color: #e8e8e8;
  border: 0;
  border-radius: 15px;
  padding-left: 15px;
  margin-top: 20px;
}
.back {
  width: 20px;
  margin: 0 10px;
}
.history,.want{
  margin-top: 30px;
  font-size: 14px;
  position: relative;
}
.del{
  width: 20px;
  position: absolute;
  right: 0;
  top: 0;
}
.history_item{
  padding: 7px 10px;
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  border-radius: 11px;
  font-size: 12px;
}
</style>