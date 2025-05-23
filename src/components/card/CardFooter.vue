<template>
  <li class="footer">
    <CardInfo :name="name" :price="price" />
    <div class="footer__cart">
      <Cart
        @click.stop="onCartClick"
        @mouseenter.stop="$emit('hover', false)"
        @mouseleave.stop="$emit('hover', true)"
      />
    </div>
  </li>
</template>

<script>
import Cart from "../Cart.vue";
import CardInfo from "./CardInfo.vue";

export default {
  name: "CardFooter",
  components: { Cart, CardInfo },
  props: {
    name: String,
    price: Number,
  },
  emits: ["hover", "cartClick"],
  methods: {
    onCartClick() {
      this.$emit("cartClick");
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);
  &__cart {
    position: absolute;
    bottom: 10px;
    right: 0px;
  }
}
</style>
