<template>
  <div
    :class="`card${$route.path === '/' ? '' : '-product'} ${isHovered && $route.path === '/' ? 'card--hover' : ''}`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <ul class="card__list">
      <CardImage :src="images[card.imageName].images[currentIndex]" />
      <CardDots
        :images="images[card.imageName].images"
        :currentIndex="currentIndex"
        @updateIndex="currentIndex = $event"
        @mouseenter="isHovered = false"
        @mouseleave="isHovered = true"
      />
      <CardFooter
        :name="card.productName"
        :price="card.price"
        @cartClick="handleCartClick"
        @hover="isHovered = $event"
      />
    </ul>
  </div>
</template>

<script>
import { data as images } from "@/data";
import CardImage from "./card/CardImage.vue";
import CardDots from "./card/CardDots.vue";
import CardFooter from "./card/CardFooter.vue";

import { mapMutations } from "vuex";

export default {
  name: "Card",
  components: {
    CardImage,
    CardDots,
    CardFooter,
  },
  props: {
    card: Object,
  },
  data() {
    return {
      images,
      isHovered: false,
      currentIndex: 0,
    };
  },
  methods: {
    ...mapMutations(["addProductInCart", "deleteFromCart"]),
    deleteCard(id) {
      this.deleteFromCart(id);
      const ids = JSON.parse(sessionStorage.getItem("ids")) || [];
      const index = ids.findIndex((el) => el === id);
      if (index !== -1) {
        ids.splice(index, 1);
        sessionStorage.setItem("ids", JSON.stringify(ids));
      }
    },
    addCardToCart(card) {
      const ids = JSON.parse(sessionStorage.getItem("ids")) || [];
      ids.push(card.id);
      sessionStorage.setItem("ids", JSON.stringify(ids));
      this.addProductInCart(card);
    },
    handleCartClick() {
      if (this.$route.path === "/cart") {
        this.deleteCard(this.card.id);
      } else {
        this.addCardToCart(this.card);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/global.less";

.card,
.card-product {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 270px;
  border-radius: 5px;
  box-shadow: 0 0 5px @shadow-color;
  background-color: @bkg-color;
  padding: 20px;
  transition: all ease-in-out 200ms;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 200px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .card {
    cursor: pointer;
  }

  .card--hover {
    box-shadow: 0 0 10px @hover-color;
  }
}
</style>
