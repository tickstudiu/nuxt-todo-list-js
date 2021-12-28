import Vue from 'vue'
import Router from 'vue-router'

import ROUTE_NAME from '@/enums/routeName'
import Home from '@/pages/index.vue'
import Todo from '@/pages/todo/index.vue'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'

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
  {
    path: '/login',
    name: ROUTE_NAME.LOGIN,
    component: Login,
  },
  {
    path: '/register',
    name: ROUTE_NAME.REGISTER,
    component: Register,
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
