<template>
  <div class="container">
    <header>header</header>
    <main>main</main>
    <footer>footer</footer>
  </div>
</template>

<script></script>

<style lang="less">
@import "@/assets/global.less";

.container {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: @bkg-color;
  .column();
}
</style>
