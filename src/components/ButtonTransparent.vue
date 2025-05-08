<template>
  <button class="button" @click="$router.go(-1)">
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonTransparent",
};
</script>
<style lang="less" scoped>
.button {
  position: absolute;
  left: 40px;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  background: inherit;
  text-align: center;

  @media (max-width: 768px) {
    left: 10px;
  }
}
</style>
