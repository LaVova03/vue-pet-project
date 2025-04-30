<template>
  <div class="modal-overlay">
    <div class="modal">
      <main>
        <div class="close" @click="$emit('close')">+</div>
        <h2>Are you sure you want to delete this card?</h2>
        <div class="buttons">
          <MainButton nameBtn="Cancel" @click="$emit('close')" />
          <MainButton nameBtn="Delete" @click="$emit('delete')" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "ConfirmModal",
  components: {
    MainButton,
  },
};
</script>

<style lang="less">
@import "@/assets/global.less";

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background-color: @primary-color;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  z-index: 1001;

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: black;
    font-weight: 600;
    transform: rotate(45deg);
    cursor: pointer;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .modal {
    width: 80%;
    padding: 20px;
  }
}
</style>
