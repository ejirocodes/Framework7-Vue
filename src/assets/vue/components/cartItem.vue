<template>
  <div id="product">
    <div class="item" v-for="product in products" :key="product.id">
      <img :src="product.cover" :alt="product.title" class="cover" />
      <div class="product-des">
        <p class="price">${{ product.cost }}</p>
        <p class="price">{{ product.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
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
    border-right: 1px solid;
    border-bottom: 1px solid;
    .cover {
      width: 100%;
    }
    .product-des {
      align-self: flex-end;
    }
  }
}
</style>
