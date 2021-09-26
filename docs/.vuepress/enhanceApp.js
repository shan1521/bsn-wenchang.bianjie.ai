import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import './public/iconfont/iconfont.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default async ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	// 解决  Uncaught (in promise) Error: Redirected when going from "/xxx/xxx.html" to "/xxx/xxx" via a navigation guard 警告
	const originalPush = router.push
	router.push = function push(location, onResolve, onReject) {
		if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
		return originalPush.call(this, location).catch(err => {err})
	}

	Vue.use(router)
    Vue.use(ElementUI);
	Vue.use(Vuex)
	Vue.mixin({ store: store });
    // Vue.prototype.$message = Message;
	if(!isServer){
		router.beforeEach((to, from,next) => {
			if(to.path.includes('/wenchangchain')){
				store.commit('currentIndex',1)
				localStorage.setItem('currentIndex',1)
			}else {
				localStorage.setItem('currentIndex',0)
				store.commit('currentIndex',0)
			}
			window.scrollTo(0,0);
			next()
		})
		await import("./public/iconfont/iconfont").then(module => {
		})
        await import('element-ui').then(module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e,'element-ui error ')
		})
	}
}
