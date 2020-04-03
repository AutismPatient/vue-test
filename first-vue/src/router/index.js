import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Item from '@/components/itempage/Item'

Vue.use(Router)

// 定义路由
export default new Router({
  base: {
    routes: [
      {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/first',
        name: 'First',
        component: First
      },
      {
        path: '/item',
        name: 'Item',
        component: Item
      }
    ],
  },
  mode: 'history'
})
