<template>
  <li class="dots" @mouseenter.stop @mouseleave.stop>
    <span
      v-for="(item, index) in images"
      :key="index"
      :class="['dot', { active: currentIndex === index }]"
      @click.stop="$emit('updateIndex', index)"
    ></span>
  </li>
</template>

<script>
export default {
  name: "CardDots",
  props: {
    images: Array,
    currentIndex: Number,
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 10px;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: @shadow-color;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: @primary-color;
    }
  }
}
</style>
