<template>
  <f7-page>
    <section id="cart" class="padding">
      <div
        class="top display-flex align-items-center justify-content-space-between"
      >
        <f7-link back class="back">
          <svg
            version="1.1"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 477.175 477.175"
            style="enable-background: new 0 0 477.175 477.175"
            xml:space="preserve"
          >
            <g>
              <path
                d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          Back
        </f7-link>
      </div>
      <f7-block>
        <f7-card v-if="cart.length <= 0" class="padding"
          >No items in cart</f7-card
        >
      </f7-block>
      <f7-block v-for="(item, i) in cart" :key="i" class="product">
        <div>
          <img :src="item.cover" :alt="item.title" class="width-100" />
          <p class="heading-2">{{ item.title }}</p>
          <p class="p-1">{{ item.cost }}</p>
        </div>
      </f7-block>
      <div class="checkout-sheet" v-if="cart.length > 0">
        <p>
          <f7-button fill large sheet-open=".demo-sheet-swipe-to-step"
            >Checkout</f7-button
          >
        </p>
        <f7-sheet
          class="demo-sheet-swipe-to-step"
          style="height: auto; --f7-sheet-bg-color: #fff"
          swipe-to-close
          swipe-to-step
          backdrop
        >
          <!-- Initial swipe step sheet content -->
          <div class="sheet-modal-swipe-step">
            <div
              class="display-flex padding justify-content-space-between align-items-center"
            >
              <div style="font-size: 18px"><b>Total:</b></div>
              <div style="font-size: 22px">
                <b>${{ totalCost }}</b>
              </div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <f7-button large fill @click="showPreloader()"
                >Make Payment</f7-button
              >
              <div class="margin-top text-align-center">
                Swipe up for more details
              </div>
            </div>
          </div>
          <!-- Rest of the sheet content that will opened with swipe -->
          <f7-block-title medium class="margin-top">Your order:</f7-block-title>
          <f7-list no-hairlines>
            <f7-list-item
              v-for="(item, i) in cart"
              :key="i"
              :title="item.title"
            >
              <b slot="after" class="text-color-black">${{ item.cost }}</b>
            </f7-list-item>
          </f7-list>
        </f7-sheet>
      </div>
    </section>
  </f7-page>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCost() {
      return this.cart.reduce(
        (accumulator, current) => accumulator + current.cost,
        0
      );
    },
  },
  methods: {
    showPreloader() {
      this.$f7.preloader.show();
      setTimeout(() => {
        this.$f7.preloader.hide();
      }, 3000);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 0.5rem;
}
</style>