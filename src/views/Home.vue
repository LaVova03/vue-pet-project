<template>
  <form @submit.prevent="sendForm">
    <MainInput
      type="text"
      v-model:value="userName"
      placeholder="Username"
      :error="userNameError"
      @clear-error="clearError('userName')"
    />
    <MainInput
      type="password"
      v-model:value="password"
      placeholder="Password"
      :error="passwordError"
      @clear-error="clearError('password')"
    />
    <MainButton type="submit" nameBtn="Submit" />
  </form>
</template>

<script>
import MainInput from "@/components/MainInput.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "Home",
  components: {
    MainInput,
    MainButton,
  },
  data() {
    return {
      userName: "",
      password: "",
      userNameError: "",
      passwordError: "",
    };
  },
  methods: {
    sendForm() {
      if (this.userName && this.password) {
        sessionStorage.setItem("token", "da8da8d468sad8sad8s6ada8d46");
        this.$store.commit("setToken", "da8da8d468sad8sad8s6ada8d46");
        this.$router.push("main");
        this.userName = "";
        this.password = "";
      } else {
        if (!this.userName) {
          this.userNameError = "Enter your username";
        }
        if (!this.password) {
          this.passwordError = "Enter your password";
        }
      }
    },
    clearError(field) {
      if (field === "userName") {
        this.userNameError = "";
      }
      if (field === "password") {
        this.passwordError = "";
      }
    },
  },
};
</script>

<style lang="less">
@import "@/assets/global.less";

form {
  width: 400px;
  height: 300px;
  border-radius: @border-radius;
  background-color: @primary-color;
  font-size: @font-size;
  .column();
  justify-content: center;
  gap: 10px;
}

@media (max-width: 768px) {
  form {
    width: auto;
    padding: 20px;
  }
}
</style>
