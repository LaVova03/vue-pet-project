<template>
  <div class="header">
    <ButtonTransparent v-if="$route.path !== '/'">
      <SvgSprite fill="white" symbol="arrow-left" size="30" />
    </ButtonTransparent>
    MERCH
    <div class="header__cart">
      <Cart @click="$router.push('/cart')" />
    </div>
  </div>
</template>
<script>
import ButtonTransparent from "./ButtonTransparent.vue";
import Cart from "./Cart.vue";
import MainButton from "./MainButton.vue";
import { SvgSprite } from "vue-svg-sprite";
export default {
  name: "Header",
  components: {
    MainButton,
    ButtonTransparent,
    SvgSprite,
    Cart,
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";

.header {
  .hederFooter();
  justify-content: center;
  font-size: 22px;
  color: @border-color;

  &__cart {
    position: absolute;
    right: 40px;

    @media (max-width: 768px) {
      right: 10px;
    }
  }
}
</style>
