<template>
  <f7-page>
    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>Home</f7-link>
      <f7-link tab-link="#tab-2">
        <f7-badge color="red">{{ cartItems }}</f7-badge>
        <span class="tabbar-label">Cart</span>
      </f7-link>
    </f7-toolbar>
    <f7-tabs animated swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
        <h1 class="heading-2 margin-bottom">DopeKart</h1>
          <div class="product-container">
            <CartItem :products="products" />
          </div>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-link href="/cart/">Cart </f7-link>
        <Cart />
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
import CartItem from "../components/cartItem";
import Cart from "./cart";
import { mapGetters } from "vuex";
export default {
  components: {
    CartItem,
    Cart,
  },
  data() {
    return {
      products: [
         {
          id: 0,
          description:
            "African Black Girl Bags School Drawstring Flip Side Pocket Mochilas Escolares Female Back Pack",
          title: "African Black Girl Bags",
          cover:
            "https://sc01.alicdn.com/kf/Hf91750d5f1ed4db7bd34345e35681acaP.jpg",
          cost: 8.5,
        },
        {
          id: 1,
          description:
            "African Black Girl Bags School Drawstring Flip Side Pocket Mochilas Escolares Female Back Pack",
          title: "African Black Girl Bags",
          cover:
            "https://sc01.alicdn.com/kf/H2d5c88f58ca5459c9726d43597ce827dh.jpg",
          cost: 10.5,
        },
        {
          id: 2,
          description:
            "Kingsons wholesale custom logo men back pack backpack bag notebook bags usb charging business laptop backpack",
          title: "Back Pack Bag",
          cover:
            "https://sc01.alicdn.com/kf/H758934dd506e41b9a2ff37a6026f32bbv.jpg",
          cost: 15.5,
        },
        {
          id: 3,
          description:
            "Magic Laptop Bags Backpack Back Pack Men Black Backpack USB",
          title: "Magic Laptop Bag",
          cover: "https://sc02.alicdn.com/kf/HTB1xCw.aOHrK1Rjy0Flq6AsaFXaB.jpg",
          cost: 13.5,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
};
</script>