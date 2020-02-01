<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
<!--      {{count}}-->
      <router-view/>
<!--      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>-->
<!--      <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import leftNav from './components/common/leftNav' // 左侧边栏
export default {
  name: 'App',
  components: {
    leftNav
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      count: state => {
        return state.app.count
      }
    })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main{
    float: left;
    width: 95%;
    background-color: #eff2f7;
    height: 100%;
    overflow: hidden;
  }

  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
