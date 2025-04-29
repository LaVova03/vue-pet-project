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
      <div v-show="route == '/main'">
        <MainButton @click="createCard" nameBtn="Create" />
      </div>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <footer>
      <SvgSprite symbol="one" size="30" fill="red" />
      <SvgSprite symbol="cloud" size="30" fill="red" />
      <SvgSprite symbol="address" size="30" fill="red" />
      <SvgSprite symbol="vite" size="30" />
    </footer>
    <CardModal
      v-show="showCreateModal"
      @open-edit-modal="showCreateModal = !showCreateModal"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SvgSprite } from "vue-svg-sprite";
import MainButton from "@/components/MainButton.vue";
import CardModal from "./components/CardModal.vue";

export default {
  components: {
    SvgSprite,
    MainButton,
    CardModal,
  },
  data() {
    return {
      showCreateModal: false,
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    route() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapActions(["setToken"]),
    logOut() {
      this.$store.commit("setToken", "");
      sessionStorage.clear();
      this.$router.push("/");
    },
    createCard() {
      this.showCreateModal = !this.showCreateModal;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.app {
  width: calc(100vw - 8rem);
  position: relative;
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  .column();

  header div {
    position: absolute;
    top: 1rem;
    right: 0;
  }

  header > div:nth-of-type(2) {
    width: max-content;
    right: none;
    left: 0;
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
