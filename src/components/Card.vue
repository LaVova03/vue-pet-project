<template>
  <ul>
    <li>{{ item.id }}</li>
    <li>{{ item.startDate }}</li>
    <li>{{ item.startTime }}</li>
    <li>{{ item.repeat }}</li>
    <li>
      <SvgSprite symbol="delete" size="30" fill="red" />
      <SvgSprite symbol="edit" size="30" fill="blue" />
    </li>
  </ul>
</template>
<script>
import { SvgSprite } from "vue-svg-sprite";
export default {
  name: "Card",
  components: {
    SvgSprite,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";

ul {
  padding: 2rem;
  width: 200px;
  list-style: none;
  text-align: left;
  background-color: @primary-color;
  border-radius: @border-radius;

  li:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 10px;
  }
}
</style>
