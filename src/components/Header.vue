<template>
  <h2>
    <slot> Default Header </slot>
  </h2>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";
h2 {
  color: @border-color;
}
</style>
