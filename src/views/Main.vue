<template>
  <div class="wrap-card">
    <transition-group name="fade" tag="div" class="wrap-inner">
      <div
        v-if="data"
        v-for="(item, index) in data"
        :key="item.id"
        class="item"
        :style="{ transitionDelay: index * 100 + 'ms' }"
      >
        <Card :item="item" />
      </div>
      <div v-else class="load">Loading...</div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "Main",
  components: {
    Card,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.wrap-inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}

.wrap-card {
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  .item {
    position: relative;
  }
}

.load {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}
</style>
