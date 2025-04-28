<template>
  <ul>
    <li>Id: {{ item.id }}</li>
    <li>Date: {{ item.startDate }}</li>
    <li>Start time: {{ item.startTime }}</li>
    <li>Repeat: {{ item.repeat }}</li>
    <li>
      <SvgSprite
        symbol="delete"
        size="24"
        fill="red"
        @click="deleteCard(item.id)"
      />
      <SvgSprite symbol="edit" size="24" fill="blue" @click="openModal" />
    </li>
  </ul>
</template>
<script>
import { SvgSprite } from "vue-svg-sprite";
import { mapActions } from "vuex";
export default {
  name: "Card",
  components: {
    SvgSprite,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteItem", "editItem"]),
    deleteCard(id) {
      this.deleteItem(id);
    },
    updateCard(item) {
      this.editItem(item);
    },
    openModal() {
      this.$emit('open-edit-modal');
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
