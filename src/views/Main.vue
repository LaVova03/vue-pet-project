<template>
  <div class="main">
    <Card
      v-for="product in data"
      :key="product.id"
      :card="product"
      @click="chooseCard(product)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Main",
  components: {
    Card,
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["setProduct"]),
    chooseCard(product) {
      this.setProduct(product);
      sessionStorage.setItem("id", product.id);
      this.$router.push("/product");
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  place-items: center;

  @media (max-width: 768px) {
    gap: 20px 5px;
  }
}
</style>
