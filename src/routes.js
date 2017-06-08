import Vue from 'vue'
import VueRouter from 'vue-router'
import TreeView from './components/TreeView.vue'
import LakeView from './components/LakeView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: 'trees' },
    { path: '/trees', component: TreeView },
    { path: '/lakes', component: LakeView }
]

const router = new VueRouter({
    routes
})

export default router
