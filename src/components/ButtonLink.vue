<template>
  <button class="link">
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonLink",
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";
.link {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: white;
  outline: none;
  border: 1px solid @border-color;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 200ms;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 0 10px @hover-color;
    }
  }
}
</style>
