<template>
  <f7-page>
    <section class="prod-details">
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
        <f7-link href="/cart/">
          <span>{{ cart.length }}</span>
          <svg
            version="1.1"
            width="2rem"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 446.853 446.853"
            style="enable-background: new 0 0 446.853 446.853"
            xml:space="preserve"
          >
            <g>
              <path
                d="M444.274,93.36c-2.558-3.666-6.674-5.932-11.145-6.123L155.942,75.289c-7.953-0.348-14.599,5.792-14.939,13.708
		c-0.338,7.913,5.792,14.599,13.707,14.939l258.421,11.14L362.32,273.61H136.205L95.354,51.179
		c-0.898-4.875-4.245-8.942-8.861-10.753L19.586,14.141c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591
		l59.491,23.371l41.572,226.335c1.253,6.804,7.183,11.746,14.104,11.746h6.896l-15.747,43.74c-1.318,3.664-0.775,7.733,1.468,10.916
		c2.24,3.184,5.883,5.078,9.772,5.078h11.045c-6.844,7.617-11.045,17.646-11.045,28.675c0,23.718,19.299,43.012,43.012,43.012
		s43.012-19.294,43.012-43.012c0-11.028-4.201-21.058-11.044-28.675h93.777c-6.847,7.617-11.047,17.646-11.047,28.675
		c0,23.718,19.294,43.012,43.012,43.012c23.719,0,43.012-19.294,43.012-43.012c0-11.028-4.2-21.058-11.042-28.675h13.432
		c6.6,0,11.948-5.349,11.948-11.947c0-6.6-5.349-11.948-11.948-11.948H143.651l12.902-35.843h216.221
		c6.235,0,11.752-4.028,13.651-9.96l59.739-186.387C447.536,101.679,446.832,97.028,444.274,93.36z M169.664,409.814
		c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117s19.116,8.574,19.116,19.117S180.207,409.814,169.664,409.814z
		 M327.373,409.814c-10.543,0-19.116-8.573-19.116-19.116s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117
		S337.916,409.814,327.373,409.814z"
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
        </f7-link>
      </div>

      <img :src="product.cover" :alt="product.title" class="cover" />
      <p class="heading-2">{{ product.title }}</p>
      <p class="p-1">${{ product.cost }}</p>
      <p class="p-1 margin-bottom">{{ product.description }}</p>
      <f7-button
        raised
        fill
        class="btn-cart btn-start margin-top display-flex"
        @click="addToBag"
        >Add to bag</f7-button
      >
    </section>
  </f7-page>
</template>

  <script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["product", "cart"]),
  },
  methods: {
    addToBag() {
      this.$store.commit("ADD_TO_CART", Object.assign({}, this.product));
      this.$f7.toast.create({
      text: `${this.product.title} has been added to cart`,
      closeTimeout: 5000
    }).open();
    //   this.$f7.toast.show(``, 'bottom', 2000);
    },
  },
};
</script>

<style lang="scss">
.prod-details {
  padding: 1rem;
  .cover {
    width: 100%;
  }
  .back {
  }
}
</style>

<style lang="scss">
</style>