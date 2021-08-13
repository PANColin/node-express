import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Login = () =>
	import("@/components/Login.vue")
const Register = () =>
	import("@/components/Register.vue")
const Menu = () =>
	import("@/views/Menu.vue")
const routes = [{
		path: "/login",
		component: Login,
		meta: {
			title: "登录",
			isKeepActive: true //缓存
		}
	},
	{
		path: "/register",
		component: Register,
		meta: {
			title: "注册",
			isKeepActive: true//缓存
		}
	},
	{
		path: "/menu",
		component: Menu,
		meta: {
			title: "菜单",
			isKeepActive: true//缓存
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
