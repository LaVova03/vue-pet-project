<template>
  <div>
    <ul>
      <li>Id: {{ item.id }}</li>
      <li>Event name: {{ item.eventName }}</li>
      <li>Date: {{ item.startDate }}</li>
      <li>Start time: {{ item.startTime }}</li>
      <li>Repeat: {{ item.repeat }}</li>
      <li>
        <SvgSprite
          symbol="delete"
          size="24"
          fill="red"
          @click="openConfirmModal(item.id)"
        />
        <SvgSprite symbol="edit" size="24" fill="blue" @click="openModal" />
      </li>
    </ul>
    <ConfirmModal
      v-if="showConfirm"
      @delete="deleteCard"
      @close="closeConfirmModal"
    />
  </div>
</template>
<script>
import { SvgSprite } from "vue-svg-sprite";
import { mapActions } from "vuex";
import ConfirmModal from "./ConfirmModal.vue";

export default {
  name: "Card",
  components: {
    SvgSprite,
    ConfirmModal,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showConfirm: false,
      deleteId: null,
    };
  },
  methods: {
    ...mapActions(["deleteItem", "editItem"]),
    deleteCard() {
      this.deleteItem(this.deleteId);
      this.showConfirm = false;
      this.deleteId = null;
    },
    updateCard(item) {
      this.editItem(item);
    },
    openModal() {
      this.$emit("open-edit-modal");
    },
    openConfirmModal(id) {
      this.showConfirm = !this.showConfirm;
      this.deleteId = id;
    },
    closeConfirmModal() {
      this.showConfirm = false;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";

ul {
  padding: 2rem;
  width: 200px;
  list-style: none;
  text-align: left;
  background-color: @primary-color;
  border-radius: @border-radius;

  li:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 10px;
  }
}

.icon {
  cursor: pointer;
}
</style>
