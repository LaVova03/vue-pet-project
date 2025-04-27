<template>
  <div class="app">
    <header>
      <nav>
        <router-link class="nav" to="/">Home</router-link> |
        <router-link
          class="nav"
          to="/main"
          :class="{ 'disabled-link': !token }"
          :style="{ pointerEvents: token ? 'auto' : 'none' }"
          >Main
        </router-link>
      </nav>
      <div v-if="token">
        <MainButton @click="logOut" nameBtn="LogOut" />
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <SvgSprite symbol="one" size="30" fill="red" />
      <SvgSprite symbol="cloud" size="30" fill="red" />
      <SvgSprite symbol="address" size="30" fill="red" />
      <SvgSprite symbol="vite" size="30" />
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SvgSprite } from "vue-svg-sprite";
import MainButton from "@/components/MainButton.vue";

export default {
  components: {
    SvgSprite,
    MainButton,
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    ...mapActions(["setToken"]),
    logOut() {
      this.$store.commit("setToken", "");
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.app {
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  .column();

  header > div {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
  }

  footer {
    display: flex;
    gap: 10px;
  }
}

.disabled-link {
  color: grey;
  pointer-events: none;
}
</style>
