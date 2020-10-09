<template>
  <div id="product">
    <div
      class="item"
      v-for="product in products"
      :key="product.id"
      @click="handleProduct(product)"
    >
      <img :src="product.cover" :alt="product.title" class="cover" />
      <div class="product-des">
        <p class="price">${{ product.cost }}</p>
        <p class="title">{{ product.title }}</p>
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
      this.UPDATE_PRODUCT(product);
      this.$f7router.navigate(`/product-details/${product.id}`);
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
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 0.5rem;
  .item {
    display: flex;
    background-color: #fff;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
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
