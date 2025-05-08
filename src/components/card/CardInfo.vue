<template>
  <div class="info">
    <div class="info__name">{{ name }}</div>
    <div class="info__price">Price: {{ price }}$</div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    name: String,
    price: Number,
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.info {
  &__name {
    color: @text-color;
    font-size: 22px;
  }

  &__price {
    color: @primary-color;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
