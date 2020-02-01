<template>
  <div class="hello">
    <el-button type="primary" @click="increase">增加</el-button>
    <el-button @click="decrease">减少</el-button>
<!--    <div class="routerLearn">-->
<!--      <span>首页：<router-link to="/">首页</router-link></span>-->
<!--      <span>&#45;&#45;hello1：<router-link :to="{name:'hello1',params:{username:'xuejz'}}">hello1</router-link></span>-->
<!--      <span>&#45;&#45;hello2：<router-link :to="{name:'hello2',params:{username:'xuejz2'}}">hello2</router-link></span>-->
<!--    </div>-->

<!--    <router-view class="aaa"></router-view>-->

  </div>
</template>

<script>

import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['myIncrease', 'myDecrease']),
    increase () {
      // this.$store.commit('increment')
      // this.increment()
      // this.$store.state.count ++
      this.myIncrease()
    },
    decrease () {
      // this.$store.commit('decrement')
      // this.decrement()
      // this.$store.state.count --
      this.myDecrease()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.routerLearn{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
</style>
