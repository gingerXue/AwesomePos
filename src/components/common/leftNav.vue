<template>
  <div class="leftNav">
    <ul>
      <li>
        <i class="icon iconfont icon-jinrudianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav'
}
</script>
<style>
  .leftNav{
    color: #fff;
    font-size: 10px;
    float: left;
    height: 100%;
    background-color: #1d8ce0;
    width: 5%;
  }

  .iconfont{
    font-size: 24px;
  }

  .leftNav ul{
    padding: 0px;
    margin: 0px;
  }

  .leftNav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
</style>
