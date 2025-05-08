<template>
  <div class="my-cart">
    <div class="my-cart__header">
      Sum: {{ sum }}$
      <MainButton v-if="sum" @click="pay">Pay</MainButton>
    </div>
    <div class="my-cart__grid">
      <Card
        v-for="product in productsInCart"
        :key="product.id + Math.random()"
        :card="product"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "MyCart",
  components: {
    Card,
    MainButton,
  },
  computed: {
    ...mapState(["productsInCart", "data"]),
    sum() {
      return this.productsInCart.reduce((acc, el) => acc + (el.price || 0), 0);
    },
  },
  methods: {
    ...mapMutations(["addProductInCart", "clearCart"]),
    ...mapActions(["fetchData"]),

    pay() {
      sessionStorage.removeItem("ids");
      this.clearCart();
      alert("Congratulations on your purchase 😊");
    },

    initCartFromSession() {
      const ids = JSON.parse(sessionStorage.getItem("ids")) || [];

      if (!ids.length || this.productsInCart.length) return;

      const counts = ids.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {});

      for (const id in counts) {
        const product = this.data.find((p) => String(p.id) === id);
        if (product) {
          for (let i = 0; i < counts[id]; i++) {
            this.addProductInCart(product);
          }
        }
      }
    },
  },
  mounted() {
    if (!this.data) {
      this.fetchData();
    } else {
      this.initCartFromSession();
    }
  },
  watch: {
    data() {
      this.initCartFromSession();
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.my-cart {
  &__header {
    font-size: 30px;
    font-weight: 600;
    color: @primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 10px;
  }

  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    place-items: center;
  }

  @media (max-width: 768px) {
    &__header {
      font-size: 22px;
    }

    &__grid {
      gap: 20px 5px;
    }
  }
}
</style>
