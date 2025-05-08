<template>
  <div class="footer">
    <div class="footer__left" @click="navigateTo">
      <SvgSprite symbol="logo" size="40" />
    </div>
    <div class="footer__right">
      <ButtonLink @click="goToPage('facebook')">
        <SvgSprite symbol="facebook" size="24" />
      </ButtonLink>
      <ButtonLink @click="goToPage('instagram')">
        <SvgSprite symbol="instagram" size="24" />
      </ButtonLink>
      <ButtonLink @click="goToPage('linkedin')">
        <SvgSprite symbol="linkedin" size="24" />
      </ButtonLink>
      <ButtonLink @click="goToPage('youtube')">
        <SvgSprite symbol="youtube" size="24" />
      </ButtonLink>
    </div>
  </div>
</template>

<script>
import { SvgSprite } from "vue-svg-sprite";
import ButtonLink from "./ButtonLink.vue";
import { links } from "@/constants";
export default {
  name: "Footer",
  components: {
    SvgSprite,
    ButtonLink,
  },
  methods: {
    goToPage(socialMedia) {
      const link = links[socialMedia];
      if (link) this.openLink(link);
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    navigateTo() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/global.less";
.footer {
  .hederFooter();

  &__left {
    transform: rotate(90deg);
    cursor: pointer;
  }

  &__right {
    display: flex;
    gap: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    &__right {
      gap: 10px;
    }
  }
}
</style>
