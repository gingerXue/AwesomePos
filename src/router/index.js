import Vue from 'vue'
import Router from 'vue-router'
import pos from '../components/page/pos'
import hello from '../components/page/HelloWorld'
import helloOne from '../components/page/helloOne'
import helloTwo from '../components/page/helloTWo'

Vue.use(Router)

/* eslint-disable */
export default new Router({
  routes: [
    {                 // 每一个链接都是一个对象
      path: '/',      // 链接路径
      name: 'pos',    // 路由名称，
      component: pos  // 对应的组件模板
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello,
      children:[
        {path:'/',component:hello},
        {path:'hello1',component:helloOne},
        {path:'hello2',component:helloTwo},
      ]
    }
  ]
})
