<template>
  <div class="description">
    <div class="description__card">
      <slot name="card" />
    </div>
    <div>
      <slot name="info" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style lang="less" scoped>
.description {
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    &__card {
      margin: 0 auto;
    }
  }
}
</style>
