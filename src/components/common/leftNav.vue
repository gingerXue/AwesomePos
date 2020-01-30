<template>
  <div class="leftNav">
    <ul>
<!--       @click="check(index)" :class="{active:selectIndex===index}"-->
      <li :key="item.id" v-for="item in chooseItem" @click="check(item.id)" :class="{active:selectIndex==item.id}">
        <router-link class="router-link" tag="div" :to="item.to">
          <i :class="item.icon"></i>
          <div>{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */
export default {
  name: 'leftNav',
  data () {
    return {
      chooseItem:[
        {id:0,name:'店铺',to:'/pos',icon:'icon iconfont icon-jinrudianpu'},
        {id:1,name:'商品',to:'/pos1',icon:'icon iconfont icon-hanbao'},
        {id:2,name:'收银',to:'/pos2',icon:'icon iconfont icon-goumai'},
        {id:3,name:'会员',to:'/pos3',icon:'icon iconfont icon-huiyuanqia'},
        {id:4,name:'设置',to:'/',icon:'icon iconfont icon-gongnengjianyi'}
      ],
      selectIndex: 0
    }
  },
  methods: {
    check (selectIndex) {
      // console.log(selectIndex)
      this.selectIndex = selectIndex
    }
  }
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
    cursor: pointer;
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px 0 10px 0;;
  }

  .leftNav li:hover{
    background-color: #1fa9ff;
  }
  .active {
    background-color: #1fa9ff;
  }
  .router-link{
    width: 70px;
  }
</style>
