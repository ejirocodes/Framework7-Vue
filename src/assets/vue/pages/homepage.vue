<template>
  <f7-page>
    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>Home</f7-link>
      <f7-link tab-link="#tab-2">Cart</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
    <f7-tabs animated>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <div class="product-container">
            <cartItem :products="products" />
          </div>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
import cartItem from "../components/cartItem";
export default {
  components: {
    cartItem,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          description:
            "Kingsons wholesale custom logo men back pack backpack bag notebook bags usb charging business laptop backpack",
          title: "Back Pack Bag",
          cover:
            "https://sc01.alicdn.com/kf/H758934dd506e41b9a2ff37a6026f32bbv.jpg",
          cost: 15.5,
        },
        {
          id: 1,
          description:
            "Magic Laptop Bags Backpack Back Pack Men Black Backpack USB",
          title: "Magic Laptop Bag",
          cover: "https://sc02.alicdn.com/kf/HTB1xCw.aOHrK1Rjy0Flq6AsaFXaB.jpg",
          cost: 13.5,
        },
        {
          id: 2,
          description:
            "African Black Girl Bags School Drawstring Flip Side Pocket Mochilas Escolares Female Back Pack",
          title: "African Black Girl Bags",
          cover:
            "https://sc01.alicdn.com/kf/Hf91750d5f1ed4db7bd34345e35681acaP.jpg",
          cost: 8.5,
        },
        {
          id: 3,
          description:
            "African Black Girl Bags School Drawstring Flip Side Pocket Mochilas Escolares Female Back Pack",
          title: "African Black Girl Bags",
          cover:
            "https://sc01.alicdn.com/kf/H2d5c88f58ca5459c9726d43597ce827dh.jpg",
          cost: 10.5,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>