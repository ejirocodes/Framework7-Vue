import Onboarding1 from './assets/vue/components/onboarding1.vue'
import Onboarding2 from './assets/vue/components/onboarding2.vue'
import Onboarding3 from './assets/vue/components/onboarding3.vue'
import Homepage from './assets/vue/pages/homepage.vue'
import ProductDetails from './assets/vue/components/productDetails.vue'
import Cart from './assets/vue/pages/cart.vue'


export default [
  {
    path: '/',
    component: Onboarding1,
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
];
