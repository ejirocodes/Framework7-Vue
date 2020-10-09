import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';
import Onboarding1 from './assets/vue/components/onboarding1.vue'
import Onboarding2 from './assets/vue/components/onboarding2.vue'
import Onboarding3 from './assets/vue/components/onboarding3.vue'
import Homepage from './assets/vue/pages/homepage.vue'
import ProductDetails from './assets/vue/components/productDetails.vue'
import Cart from './assets/vue/pages/cart.vue'

import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

export default [
  // {
  //   path: '/',
  //   component: Home
  // },
  {
    path: '/onboarding1/',
    component: Onboarding1,
    alias: ['/']
  },
  {
    path: '/onboarding2/',
    component: Onboarding2
  },
  {
    path: '/onboarding3/',
    component: Onboarding3
  },
  {
    path: '/home/',
    component: Homepage
  },
  {
    path: '/product-details/:id',
    component: ProductDetails
  },
  {
    path: '/cart/',
    component: Cart
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/chat/',
    component: Chat
  },
  {
    path: '/vuex/',
    component: Vuex
  },
];
