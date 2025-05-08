<template>
  <li class="image-wrapper">
    <img class="image-wrapper__img" alt="logo" :src="src" />
  </li>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    src: String,
  },
};
</script>

<style lang="less" scoped>
.image-wrapper {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    max-width: 180px;
    max-height: 180px;
    object-fit: contain;
  }
}
</style>
