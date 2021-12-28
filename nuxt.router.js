import Vue from 'vue'
import Router from 'vue-router'

import ROUTE_NAME from '@/enums/routeName'
import Home from '@/pages/index.vue'
import Todo from '@/pages/todo/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: ROUTE_NAME.INDEX,
    component: Home,
  },
  {
    path: '/todo',
    name: ROUTE_NAME.TODO,
    component: Todo,
  },
]

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes,
  })
}
