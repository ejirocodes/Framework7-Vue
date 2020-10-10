<template>
  <div id="product">
    <div class="item" v-for="product in products" :key="product.id">
      <img
        :src="product.cover"
        :alt="product.title"
        class="cover"
        @click="handleProduct(product)"
      />
      <div
        class="product-des display-flex justify-content-space-between width-100 align-items-center"
      >
        <div>
          <p class="p-1">${{ product.cost }}</p>
          <p class="heading-2">{{ product.title }}</p>
        </div>
        <span @click="addToBag(product)">
          <svg
            viewBox="0 0 426.66667 426.66667"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m410.667969 229.332031h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
            <path
              d="m213.332031 426.667969c-8.832031 0-16-7.167969-16-16v-394.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v394.667969c0 8.832031-7.167969 16-16 16zm0 0"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["products"],
  methods: {
    handleProduct(product) {
      this.$f7router.navigate(`/product-details/${product.id}`);
      this.UPDATE_PRODUCT(product);
    },
    addToBag(product) {
      console.log("cart");
      this.$store.commit("ADD_TO_CART", Object.assign({}, product));
      this.$f7.toast.show({
        text: `${product.title} has been added to cart`,
        position: "top",
        closeTimeout: 2000,
      });
    },
    ...mapMutations(["UPDATE_PRODUCT"]),
  },
};
</script>

<style lang="scss">
#product {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 0.5rem;
  .item {
    display: flex;
    background-color: #fff;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0.6rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    .cover {
      width: 100%;
    }
    .product-des {
      align-self: flex-start;
    }
  }
}
</style>
