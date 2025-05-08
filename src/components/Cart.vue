<template>
  <button class="cart">
    <SvgSprite
      :symbol="
        $parent?.$options?.name === 'Header'
          ? 'cart'
          : $route.path !== '/cart'
            ? 'cart'
            : 'delete'
      "
      fill="white"
      size="30"
    />
  </button>
</template>
<script>
import { SvgSprite } from "vue-svg-sprite";
export default {
  name: "Cart",
  components: {
    SvgSprite,
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";

.cart {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: @primary-color;
  padding: 5px;
  border-radius: 5px;
  transition: all ease-in-out 200ms;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 0 10px @hover-color;
    }
  }
}
</style>
