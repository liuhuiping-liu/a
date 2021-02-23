<template>
  <div class="d">
    <div  v-for="(item,index) in box" :key="index" @click="click">
      <div class="d1">1</div>
    </div>
  </div>
</template>
<style>
  .d1{
    width: 100px;
    height: 10px;
    border: 1px solid red;
  }
</style>
scrip