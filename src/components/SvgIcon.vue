<script setup lang="ts">
defineProps<{
  name: string;
  size?: string | number;
  color?: string;
}>();
</script>

<template>
  <svg
    :class="`icon icon-${name}`"
    :style="{ width: size, height: size, fill: color }"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>
