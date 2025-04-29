<template>
  <button>{{ nameBtn }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    nameBtn: {
      type: String,
      default: "Approve",
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: @bkg-color;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;
}
button:hover {
  border-color: @hover-color;
}
</style>
