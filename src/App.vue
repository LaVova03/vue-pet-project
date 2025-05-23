<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main class="container__main">
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less">
@import "@/assets/global.less";

.container {
  min-height: 100vh;
  gap: 20px;
  .column();

  &__main {
    width: 80vw;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media(max-width:768px){
    gap: 10px;
   
    &__main {
      width: 95vw;
    }
  }
}
</style>
