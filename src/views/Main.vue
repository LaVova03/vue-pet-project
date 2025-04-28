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
        <Card :item="item" @open-edit-modal="openEditModal(item)" />
      </div>
      <div v-else class="load">Loading...</div>
    </transition-group>
    <EditModal
      :card="selectedItem"
      v-show="showEditModal"
      @open-edit-modal="showEditModal = !showEditModal"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "@/components/Card.vue";
import EditModal from "@/components/EditModal.vue";

export default {
  name: "Main",
  components: {
    Card,
    EditModal,
  },
  data() {
    return {
      showEditModal: false,
      selectedItem: null,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    openEditModal(card) {
      this.selectedItem = card;
      this.showEditModal = !this.showEditModal;
    },
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
  width: calc(100vw - 4rem);
  gap: 50px;
  justify-items: center;
  align-items: center;
}

.wrap-card {
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
