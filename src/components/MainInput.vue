<template>
  <div class="input-wrap">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="($emit('update:value', $event.target.value), $emit('clearError'))"
    />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "MainInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:value", "clearError"],
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.input-wrap {
  height: 70px;
  text-align: left;

  input {
    width: 250px;
    padding: 10px;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    background-color: white;
    color: black;

    &:focus {
      border: 2px solid @border-color;
    }
  }

  div {
    color: @error-color;
    font-weight: 600;
  }
}
</style>
