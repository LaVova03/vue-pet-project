<template>
  <div class="product">
    <Description v-if="product">
      <template #card>
        <Card :card="product" />
      </template>

      <template #info>
        <ul class="product__list">
          <li>
            <span class="product__span">Description:</span>
            {{ productData.description }}
          </li>
          <li><span class="product__span">Details:</span></li>
          <li
            class="product__details"
            v-for="detail in productData.details"
            :key="detail"
          >
            -{{ detail.toLowerCase() }}
          </li>
        </ul>
      </template>
    </Description>

    <div v-else>Loading...</div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { data as products } from "@/data";
import Description from "@/components/Description.vue";

export default {
  name: "Product",
  components: {
    Card,
    Description,
  },
  computed: {
    ...mapState(["product", "data"]),
    productData() {
      return products[this.product.imageName] || {};
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["setProduct"]),
  },
  mounted() {
    const idFromStorage = sessionStorage.getItem("id");
    if (!this.data) {
      this.fetchData();
    } else {
      const item = this.data.find((el) => el.id == idFromStorage);
      if (item) {
        this.setProduct(item);
      }
    }
  },
  watch: {
    data(newData) {
      const idFromStorage = sessionStorage.getItem("id");
      if (!newData?.length || !idFromStorage) return;
      const item = newData.find((el) => el.id == idFromStorage);
      if (item) {
        this.setProduct(item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.product {
  &__wrap {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    font-size: 20px;
  }

  &__span {
    color: @primary-color;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    &__list {
      white-space: wrap;
      font-size: 18px;
    }
  }
}
</style>
