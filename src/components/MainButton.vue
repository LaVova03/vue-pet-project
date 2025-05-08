<template>
  <button class="main-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MainButton",
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.main-btn {
  border-radius: 8px;
  border: 1px solid transparent;
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  background-color: @bkg-color;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;

  &:hover {
    border-color: @hover-color;
  }
}
</style>
