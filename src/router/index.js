import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import todo from '@/components/todo'


Vue.use(Router)

export default new Router({
  routes: [
	{
      path: '/todo',
      name: 'todo',
      component: todo
    },	
	{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
  
})
