import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Index',
	component: () => import('@/views/index'),
	children: [{
			path: '/navigation',
			name: 'navigation',
			component: () => import('@/views/navigation')
		},
		{
			path: '/navigation-detail',
			name: 'navigation-detail',
			component: () => import('@/views/navigation-detail')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login')
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('@/views/register')
		}
	]
}]

const router = new VueRouter({
	routes
})

// Path Beofore Interceptor
router.beforeEach((to, from, next) => {
	next()
})

export default router
