import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create',
    component: () => import('../views/Create')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task.vue'),
    props: true
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
