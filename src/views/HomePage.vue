<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

const store = useStore();

const count = computed(() => store.state.count);
const doubleCount = computed(() => store.getters.getCount);

function increment() {
  store.commit("increment");
}
</script>

<template>
  <div class="main">
    <h2>Счётчик: {{ count }}</h2>
    <h3>Удвоенный: {{ doubleCount }}</h3>
    <button @click="increment">Увеличить</button>
    <div class="svg">
      <SvgIcon name="large" size="32" color="gray" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: cursive;
}

.svg {
  cursor: pointer;
}
</style>
