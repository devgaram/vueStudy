import Vue from 'vue'
import Router from 'vue-router'
import Vocabulary from './components/Vocabulary.vue'
import About from './components/About.vue'

//모듈 시스템을 사용하는 경우(vue-cli을 사용한 경우)
//1. Vue 및 VueRouter를 가져온 다음 Vue.use(VueRouter)를 호출하면 된다.
Vue.use(Router)

//2. 라우터 인스턴스를 생성하고 routes 옵션을 전달한다.
//각 라우트는 컴포넌트에 맵핑되어야한다.
export default new Router({
  routes: [
    {
      path: '/',
      name: 'vocabulary',
      component: Vocabulary
    },
    {
      path: '/about/:name', //동적라우트 매칭, 동일한 레이아웃을 가지지만, name에 따라 다르게 렌더링하고 싶을 때
      name: 'about',
      component: About
    }
  ]
})