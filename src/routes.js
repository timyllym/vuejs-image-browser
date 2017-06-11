import Vue from 'vue'
import VueRouter from 'vue-router'
import TreeView from './components/TreeView.vue'
import LakeView from './components/LakeView.vue'
import ImageView from './components/ImageView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'trees' },
  { path: '/trees', component: TreeView,
    children: [
      { path: 'image/:id', component: ImageView }
    ]
  },
  { path: '/lakes', component: LakeView,
    children: [
      { path: 'image/:id', component: ImageView }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
