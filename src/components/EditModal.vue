<template>
  <div class="modal-overlay">
    <div class="modal">
      <main>
        <div class="close" @click="closeModal">+</div>
        <h2>{{ card ? "Edit Card" : "Create Card" }}</h2>
        <form @submit.prevent="sendForm">
          <MainInput
            v-model:value="item.startDate"
            placeholder="Start Date"
            :error="errorStartDate"
            @clear-error="clearError('startDate')"
          />
          <MainInput
            v-model:value="item.startTime"
            placeholder="Start Time"
            :error="errorStartTime"
            @clear-error="clearError('startTime')"
          />
          <div class="select">
            <select
              v-model="item.repeat"
              :error="errorRepeat"
              @clear-error="clearError('repeat')"
            >
              <option :value="item.repeat" disabled selected>
                {{ card ? card.repeat : "Choose your option" }}
              </option>
              <option value="Every Day">Every Day</option>
              <option value="Every Week">Every Week</option>
              <option value="Every Month">Every Month</option>
            </select>
          </div>
          <MainButton type="submit" />
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MainButton from "./MainButton.vue";
import MainInput from "./MainInput.vue";

export default {
  name: "EditModal",
  components: {
    MainInput,
    MainButton,
  },
  props: {
    card: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      item: {
        id: this.card ? this.card.id : null,
        startDate: this.card ? this.card.startDate : "",
        startTime: this.card ? this.card.startTime : "",
        repeat: this.card ? this.card.repeat : "",
      },

      errorStartDate: "",
      errorStartTime: "",
      errorRepeat: "",
    };
  },
  watch: {
    card: {
      handler(newCard) {
        if (newCard) {
          this.item.id = newCard.id || null;
          this.item.startDate = newCard.startDate || "";
          this.item.startTime = newCard.startTime || "";
          this.item.repeat = newCard.repeat || "";
        }
      },
      immediate: true,
    },
  },

  methods: {
    ...mapActions(["editItem"]),
    closeModal() {
      this.$emit("open-edit-modal");
    },
    sendForm() {
      if (this.item.startDate && this.item.startTime && this.item.repeat) {
        this.editItem(this.item);
        this.closeModal();
        this.item.startDate = "";
        this.item.startTime = "";
        this.item.repeat = "";
      } else {
        if (!this.item.startDate) {
          this.errorStartDate = "Enter your start date";
        }
        if (!this.item.startTime) {
          this.errorStartTime = "Enter your start time";
        }
        if (!this.item.repeat) {
          this.errorRepeat = "Enter your repeat";
        }
      }
    },
    clearError(field) {
      if (field === "startDate") {
        this.errorStartDate = "";
      }
      if (field === "startTime") {
        this.errorStartTime = "";
      }
      if (field === "repeat") {
        this.errorRepeat = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
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

  form {
    .column();
  }

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

  .select {
    height: 70px;
    text-align: left;

    select {
      .inptSize();
      width: 274px;
      &:focus {
        border: 2px solid @border-color;
      }
    }
  }
}
</style>
