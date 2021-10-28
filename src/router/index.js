import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Index',
	component: () => import('@/views/index'),
	children:[
		{path:'/navigation', name: 'navigation', component: () => import('@/views/navigation')}
	]
} ]

const router = new VueRouter({
	routes
})

// Path Beofore Interceptor
router.beforeEach((to, from, next) => {
	next()
})

export default router
