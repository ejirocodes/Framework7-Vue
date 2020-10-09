<template>
  <f7-page>
    <section id="cart">
      Hello
      <img :src="cart.cover" :alt="cart.title">

           <p>
        <a
          class="button sheet-open"
          href="#"
          data-sheet=".my-sheet-swipe-to-step"
          >Checkout</a
        >
      </p>
      <div
        class="sheet-modal my-sheet-swipe-to-step"
        style="height: auto; --f7-sheet-bg-color: #fff"
      >
        <div class="sheet-modal-inner">
          <div class="sheet-modal-swipe-step">
            <div
              class="display-flex padding justify-content-space-between align-items-center"
            >
              <div style="font-size: 18px"><b>Total:</b></div>
              <div style="font-size: 22px"><b>$500</b></div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <a class="button button-large button-fill">Make Payment</a>
              <div class="margin-top text-align-center">
                Swipe up for more details
              </div>
            </div>
          </div>
          <div class="block-title block-title-medium margin-top">
            Your order:
          </div>
          <div class="list no-hairlines">
            <ul>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">Item 1</div>
                  <div class="item-after text-color-black"><b>$200</b></div>
                </div>
              </li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">Item 2</div>
                  <div class="item-after text-color-black"><b>$180</b></div>
                </div>
              </li>
              <li class="item-content">
                <div class="item-inner">
                  <div class="item-title">Delivery</div>
                  <div class="item-after text-color-black"><b>$120</b></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
  },
};
</script>

<style>
</style>