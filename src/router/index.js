import Vue from 'vue'
import Router from 'vue-router'
import pos from '../components/page/pos'
import hello from '../components/page/HelloWorld'
// import helloOne from '../components/page/helloOne'
// import helloTwo from '../components/page/helloTWo'

Vue.use(Router)

/* eslint-disable */
/*export default new Router({
  routes:[
    {
      path:'/',
      name:'welcome',
      component:hello,
      children:[
        {path:'hello1',name:'hello1',component:helloOne},
        {path:'hello2',name:'hello2',component:helloTwo}
      ]
    },{
      path:'/pos',
      name:'pos',
      component:pos
    }
  ]
})*/
export default new Router({
  routes:[
    {
      path:'/',
      name:'welcome',
      component:hello
    },{
      path:'/pos',
      name:'pos',
      component:pos
    }
  ]
})
