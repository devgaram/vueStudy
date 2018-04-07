import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'

Vue.use(VeeValidate);
Vue.config.productionTip = false

//루트 인스턴스를 만들고 마운트하기.
//라우터 옵션을 라우터에 삽입하여 전체 응용프로그램을 라우터가 인식하게 한다.
new Vue({
	router,
  	render: h => h(App)
}).$mount('#app')
